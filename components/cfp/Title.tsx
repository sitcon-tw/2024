export default function Title(props: {content:string}) {
  return (
    <h1 className="text-3xl leading-normal lg:text-5xl lg:leading-[75px] border-b-[#E5C366] border-b pt-2 font-bold">{props.content}</h1>
  );
}