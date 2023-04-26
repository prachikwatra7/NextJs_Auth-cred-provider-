import Link from "next/link";
import { getSession, useSession, signOut } from "next-auth/react";
import styles from "../styles/Home.module.css";

const Profile = () => {
  return (
    <section className={`container mx-auto text-center ${styles.main}`}>
      <h3 className="text-4xl font-bold">Profile Page</h3>
      <Link href="/">Home Page</Link>
    </section>
  );
};

export default Profile;

export async function getServerSideProps({ req }) {
  const session = await getSession({ req });

  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }
  // authorize user return session
  return {
    props: { session },
  };
}
