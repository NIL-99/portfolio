import Head from "next/head";

export const siteTitle = "MingYong"

export default function Layout(children: React.ReactNode; ) {
    return (
        <div>
            <Head>
                <link ref="icon" href="/../public/my-icon.png" />
				<meta
					name="description"
					content="Ming Yong portfolio"
				/>
				<meta name="og:title" content={siteTitle} />
            </Head>
        </div>
    )
}