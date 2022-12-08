import Head from "next/head";
import { Layout, Stages } from "components";
import { SportService } from "services";

type Props = {
    sports: Sport[];
};

export const getStaticProps = async () => {
    const sports = await SportService.getSports();
    return { props: { sports } };
};

const Home = ({ sports }: Props) => {
    return (
        <div>
            <Head>
                <title>Prime Sports - Agendamento de quadras</title>
                <meta name="description" content="Prime Sports - Faça o agendamento do seu esporte preferido!" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <Layout>
                    <Stages sports={sports} />
                </Layout>
            </main>
        </div>
    );
};

export default Home;
