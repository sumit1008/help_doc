import {
    Body,
    Button,
    Container,
    Head,
    Hr,
    Html,
    Img,
    Preview,
    Section,
    Text,
} from "@react-email/components";
import * as React from "react";


const baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000";

export const EmailTemplate = ({
    userFirstname="test user ",
} ) => (
    <Html>
        <Head />
        <Preview>
            The sales intelligence platform that helps you uncover qualified leads.
        </Preview>
        <Body style={main}>
            <Container style={container}>
                <Img
                    src={'https://scontent.fdel4-2.fna.fbcdn.net/v/t39.30808-6/435058730_1745159686010429_4367861755173840658_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=A6uEwjDT_CsAb6bAzXE&_nc_ht=scontent.fdel4-2.fna&oh=00_AfCCRt9wUIUTVBVbEl3InoF_JiJI7kMlQXUxlGu1uLniKw&oe=66173C79'}
                    width="170"
                    height="50"
                    alt="Koala"
                    style={logo}
                />
                <Text style={paragraph}>Hi {userFirstname},</Text>
                <Text style={paragraph}>
                    Welcome to Koala, the sales intelligence platform that helps you
                    uncover qualified leads and close deals faster.
                </Text>
                <Section style={btnContainer}>
                    <Button style={button} href="https://getkoala.com">
                        Get started
                    </Button>
                </Section>
                <Text style={paragraph}>
                    Best,
                    <br />
                    The Koala team
                </Text>
                <Hr style={hr} />
                <Text style={footer}>
                    470 Noor Ave STE B #1148, South San Francisco, CA 94080
                </Text>
            </Container>
        </Body>
    </Html>
);


export default EmailTemplate;

const main = {
    backgroundColor: "#ffffff",
    fontFamily:
        '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
    margin: "0 auto",
    padding: "20px 0 48px",
};

const logo = {
    margin: "0 auto",
};

const paragraph = {
    fontSize: "16px",
    lineHeight: "26px",
};

const btnContainer = {
    textAlign: "center" ,
};

const button = {
    backgroundColor: "#5F51E8",
    borderRadius: "3px",
    color: "#fff",
    fontSize: "16px",
    textDecoration: "none",
    textAlign: "center",
    display: "block",
    padding: "12px",
};

const hr = {
    borderColor: "#cccccc",
    margin: "20px 0",
};

const footer = {
    color: "#8898aa",
    fontSize: "12px",
};
