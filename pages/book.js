import BookingSection from "../components/BookingSection/BookingSection";
import Layout from "../components/Layout/Layout";
import Head from 'next/head'
import PageFade from "../components/PageFade";
import AdobeAnalytics from "../components/AdobeAnalytics/AdobeAnalytics";
import AdobeAnalyticsUpdate from "../components/AdobeAnalytics/AdobeAnalyticsUpdate";
import Meta from "../components/Meta/Meta";
import { getPageSeo } from "../lib/gql-query";

const Page = ({test, SEO}) => {
    
    return (
        <PageFade>

            <Meta SEO={SEO}/>
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

    const seo = await getPageSeo('book', 'URI');
    
    return {
      props: {
        test: "",
        SEO: seo?.page?.seo || ''
      },
      revalidate: 1,
    };
}
