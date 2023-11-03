export default function Subtitle(props: {content:string}) {
  return (
    <h2 className="w text-2xl lg:text-[32px] font-bold">{props.content}</h2>
  );
}