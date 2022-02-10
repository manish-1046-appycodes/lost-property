import BookingSection from "../components/BookingSection/BookingSection";
import Layout from "../components/Layout/Layout";

const Page = () => {

    
    
    return (
        
        <BookingSection/>
    
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
