import React from "react";
import nookies from "nookies";
import { verifyIdToken } from "../firebaseAdmin";
import firebaseClient from "../firebaseClient";
import firebase from "firebase/app";

function Authenticated({ session }) {
  firebaseClient();
  if (session) {
    return (
      <div style={{ textAlign: "center" }}>
        <button
          onClick={async () => {
            await firebase.auth().signOut();
            alert("you have signed out successfully");
            window.location.href = "/login";
          }}
        >
          Sign out
        </button>
      </div>
    );
  } else {
    return <h3>loading...</h3>;
  }
}

export default Authenticated;

export async function getServerSideProps(context) {
  try {
    const cookies = nookies.get(context);
    const token = await verifyIdToken(cookies.token);
    const { uid, email } = token;
    return {
      props: { session: `Your email is ${email} and your UID is ${uid}.` },
    };
  } catch (err) {
    context.res.writeHead(302, { Location: "/login" });
    context.res.end();
    return { props: {} };
  }
}
