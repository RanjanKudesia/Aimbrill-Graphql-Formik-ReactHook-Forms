

function Graphql({ launches }) {

    console.log('Launches', launches);

    return (
        <>
            hello
        </>
    )
}


export async function getStaticProps(context) {
    return {
        props: {
            launches: 'ranjan',
        }
    }
};


export default Graphql;