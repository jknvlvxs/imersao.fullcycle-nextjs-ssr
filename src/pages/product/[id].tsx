import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/dist/client/router";
import axios from "axios";

const ProductPage = () => {

    const router = useRouter();

    const {id} = router.query;

    return (
        <div>
            ProductPage {id}
        </div>
    );
};

export default ProductPage;

export const getStaticProps: GetStaticProps = async (context) => {

    return {
        props: {
        }
    }
}

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: [
            {params: {id: '123'}}
        ],
        fallback: true
    }
}