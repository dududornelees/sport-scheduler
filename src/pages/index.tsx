import Head from "next/head";
import { Layout, TextBox, SportCard } from "components";
import { SportCardService } from "services";

type Props = {
    sportsCards: SportCard[];
};

export const getStaticProps = async () => {
    const sportsCards = await SportCardService.getSportsCards();
    return { props: { sportsCards } };
};

const Home = ({ sportsCards }: Props) => {
    return (
        <div>
            <Head>
                <title>Sport Scheduler</title>
                <meta name="description" content="Sport Scheduler - Faça o agendamento do seu esporte preferido!" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <Layout>
                    <TextBox texts={["Vamos começar!", "Selecione a quadra:"]} />

                    <div className="grid gap-4 lg:gap-8 lg:grid-cols-2">
                        {sportsCards.map((sportCard, index) => (
                            <SportCard key={index} sportCard={sportCard} />
                        ))}
                    </div>
                </Layout>
            </main>
        </div>
    );
};

export default Home;
