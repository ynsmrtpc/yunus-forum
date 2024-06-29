import { useParams } from "react-router-dom";

// Profil sayfası
const ProfilePage = () => {
    const { id } = useParams();

    return (
        <div>
            <h2 className="text-3xl font-bold mb-4">Profile {id}</h2>
            <p>This is the profile page for user {id}.</p>
        </div>
    );
};

export default ProfilePage;
