import { Header } from "components";
import * as P from "./props";

export const Layout = ({ children }: P.Props) => {
    return (
        <>
            <Header />
            <main className="max-w-4xl mx-auto px-4 lg:px-0">{children}</main>
        </>
    );
};
