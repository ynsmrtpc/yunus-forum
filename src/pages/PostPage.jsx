import { useParams } from "react-router-dom";

// Post sayfası
const PostPage = () => {
    const { id } = useParams();

    return (
        <div>
            <h2 className="text-3xl font-bold mb-4">Post {id}</h2>
            <p>This is the detail view of post {id}.</p>
        </div>
    );
};

export default PostPage;
