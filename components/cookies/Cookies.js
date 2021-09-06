
import CookieConsent from "react-cookie-consent"


const style = {
    container: {
        position: "fixed",
        width: "100vw",
        height: "100vh",
        background: "rgba(43, 55, 59, 0.7)",
        left: "0",
        bottom: "0",
        backdropFilter: "blur(2px)",
    },
    content: {
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
        width: "80vw",
        maxWidth: "500px",
        color: "#fff",
        padding: "20px",
        borderRadius: "20px",
        margin: "0",
    },
    button: {
        position: "absolute",
        left: "50%",
        bottom: "20%",
        transform: "translate(-50%, -50%)",
        color: "#fff",
        background: "var(--color-accent)",
        borderRadius: "5px",
        fontSize: "20px",
        padding: "10px 20px",
        margin: "0",
        cursor: "pointer",
    },
}

const Cookies = () => {
    return (
        <CookieConsent
            location="bottom"
            buttonText="Accept"
            cookieName="myAwesomeCookieName2"
            style={style.container}
            buttonStyle={style.button}
            expires={360}
            acceptOnScroll={true}
            acceptOnScrollPercentage={30}
            debug={false}
            contentStyle={style.content}
        >
            <p className="cookieText">
                This website uses cookies to make it more convenient and enjoyable, If you agree to the use of cookies, click "Accept"{" "}
                <a
                    href={'/privacy-policy'}
                    target="blank"
                    style={{ textDecoration: "underline", color: "#fff" }}
                >
                    Privacy Policy.
                </a>
            </p>
        </CookieConsent>
    )
}

export default Cookies
