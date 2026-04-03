type Props = {
    params: {
        person: string;
    };
};

const GreetPage = async ({ params }: Props) => {
    const { person } = await params;
    return (
    <div>Hi {person}</div>
  )
}

export default GreetPage