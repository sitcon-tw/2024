export default function Card({
    title,
    content,
    open,
    click,
}: {
    title: string
    content: string
    open: boolean
    click: () => void
}) {
    return <div onClick={click}>
        <h1>{title}</h1>
        {open && <p>{content}</p>}
    </div>
}
