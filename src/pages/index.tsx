import Head from "next/head";
import { Layout, TextBox } from "components";

const Home = () => {
    return (
        <div>
            <Head>
                <title>Sport Scheduler</title>
                <meta name="description" content="Sport Scheduler - Faça o agendamento do seu esporte preferido!" />
                <link rel="icon" href="/favicon.ico" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
                    rel="stylesheet"
                />
            </Head>

            <main>
                <Layout>
                    <TextBox texts={["Vamos começar!", "Selecione o esporte que você vai praticar:"]} />
                </Layout>
            </main>
        </div>
    );
};

export default Home;
