import satori from "satori";
import fs from "fs";
import { Resvg } from "@resvg/resvg-js";
const sessions = JSON.parse(fs.readFileSync("../../public/sessions.json"));
const NotoSansTCBold = fs.readFileSync("./fonts/NotoSansTC-Bold.otf");
const NotoSansTCMedium = fs.readFileSync("./fonts/NotoSansTC-Medium.otf");
const logoImage = fs.readFileSync("../../public/logo_2024.png");
const t = performance.now();

await Promise.all(
  sessions.sessions.map(async (session) => {
    const title = session.zh.title;
    const speakers = session.speakers
      .map((x) => sessions.speakers.find((speaker) => speaker.id == x)?.zh.name)
      .filter((x) => x)
      .join("、");
    if (session.zh.description == "") return;
    const type = sessions.session_types
      .map((x) => (x.id == session.type ? x.zh.name : ""))
      .filter((x) => x)[0];

    const svg = await satori(
      {
        type: "div",
        props: {
          style: {
            display: "flex",
            flexDirection: "column",
            backgroundColor: "#F8F3E8",
            color: "#385AAC",
            padding: 64,
            height: 600,
            width: 1200,
          },
          children: [
            {
              type: "div",
              props: {
                children: type,
                style: {
                  fontSize: 32,
                },
              },
            },
            {
              type: "div",
              props: {
                children: title,
                style: {
                  fontSize: 64,
                  fontWeight: 700,
                },
              },
            },
            {
              type: "div",
              props: {
                style: {
                  flex: 1,
                },
              },
            },
            {
              type: "div",
              props: {
                style: {
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-end",
                },
                children: [
                  {
                    type: "div",
                    props: {
                      children: speakers,
                      style: {
                        fontSize: 48,
                      },
                    },
                  },
                  {
                    type: "img",
                    props: {
                      height: 128,
                      src: `data:image/png;base64,${Buffer.from(
                        logoImage,
                      ).toString("base64")
                        }`,
                    },
                  },
                ],
              },
            },
          ],
        },
      },
      {
        width: 1200,
        height: 600,
        fonts: [
          {
            name: "Noto Sans TC",
            data: NotoSansTCMedium,
            weight: 500,
            style: "normal",
          },
          {
            name: "Noto Sans TC",
            data: NotoSansTCBold,
            weight: 700,
            style: "normal",
          },
        ],
      },
    );
    const resvg = new Resvg(svg, {
      fitTo: {
        mode: "width",
        value: 2400,
      },
    });
    const pngData = resvg.render();
    const pngBuffer = pngData.asPng();
    fs.mkdirSync("../../public/sessions", { recursive: true });
    fs.writeFileSync(`../../public/sessions/${session.id}.png`, pngBuffer);
    console.log(session.zh.title);
  }),
);
console.info("✨ Done in", ((performance.now() - t) / 1000).toFixed(2), "s");
