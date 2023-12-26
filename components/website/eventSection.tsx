export default function EventSection({ title, content }: { title: React.ReactNode, content: React.ReactNode }) {
    return (
        <div className="mb-16">
            <h3 className="font-bold text-3xl">{title}</h3>
            <div className="ml-20 mt-9">
                {content}
            </div>
        </div>
    );
  }
  