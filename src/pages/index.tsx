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
                <title>Sport Scheduler</title>
                <meta name="description" content="Sport Scheduler - Faça o agendamento do seu esporte preferido!" />
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
