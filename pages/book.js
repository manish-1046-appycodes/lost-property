import BookingSection from "../components/BookingSection/BookingSection";
import Layout from "../components/Layout/Layout";
import Head from 'next/head'
import PageFade from "../components/PageFade";
import AdobeAnalytics from "../components/AdobeAnalytics/AdobeAnalytics";
import AdobeAnalyticsUpdate from "../components/AdobeAnalytics/AdobeAnalyticsUpdate";

const Page = () => {
    
    return (
        <PageFade>

            <Head>
                <title>Lost Property - Book</title>
                <meta name="description" content="Lost Property Booking" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <AdobeAnalyticsUpdate/>

            <BookingSection/>

        </PageFade>
    
    );
};

export default Page;

Page.getLayout = function getLayout(page) {
return (
    <Layout border="true">{page}</Layout>
)
}

export async function getStaticProps({ params }) {
return {
    props: {
    test: ""
    },
    revalidate: 1,
};
}
