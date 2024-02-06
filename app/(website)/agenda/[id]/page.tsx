import sessions from "@/public/sessions.json";
import AgendaPage from "@/components/website/AgendaPage";

export function generateStaticParams() {
  const ids = sessions.sessions.map((session) => session.id);
  return ids.map((x) => ({ id: x }));
}

export default function Page({ params }: { params: { id: string } }) {
  const { id } = params;
  return (
    <AgendaPage openSessionID={id} isOpenByDefault={true} />
  );
}
