import React, { useEffect, useState } from "react";
import {
  ClockIcon,
  ChartBarIcon,
  ChartBarSquareIcon,
  BoltIcon,
} from "@heroicons/react/24/outline";
import FadeInSection from "./FadeInSection"; // import at the top


function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const styles = {
    page: {
      fontFamily: "Inter, Arial, sans-serif",
      background: "#fafbfc",
      minHeight: "100vh",
      margin: 0,
      color: "#181c25",
    },
    nav: {
      display: "flex",
      flexDirection: isMobile ? "column" : "row",
      justifyContent: "space-between",
      alignItems: isMobile ? "flex-start" : "center",
      padding: isMobile ? "20px" : "32px 40px 0 40px",
      gap: isMobile ? 10 : 0,
    },
    logo: {
      fontWeight: 700,
      fontSize: isMobile ? "1.5rem" : "1.9rem",
      color: "#3a5cff",
      letterSpacing: "-1px",
      marginLeft: isMobile ? 0 : 100,
    },
    btn: {
      background: "#3a5cff",
      color: "#fff",
      padding: "14px 30px",
      borderRadius: "8px",
      fontWeight: 600,
      fontSize: "1rem",
      border: "none",
      cursor: "pointer",
      boxShadow: "0 2px 8px rgba(58,92,255,0.08)",
      marginTop: 8,
      alignSelf: isMobile ? "flex-start" : "center",
    },
    hero: {
      textAlign: "left",
      marginTop: 60,
      marginBottom: 60,
      marginLeft: isMobile ? "20px" : "200px",
      padding: isMobile ? "0 20px" : "0 40px",
    },
    heroSub: {
      color: "#555e6e",
      fontSize: isMobile ? "1.25rem" : "2.25rem",
      maxWidth: 720,
      margin: "0 0 32px 0",
      fontWeight: 400,
    },
    badge: {
      display: "inline-block",
      background: "#eaf0ff",
      color: "#3a5cff",
      borderRadius: "16px",
      fontWeight: 600,
      fontSize: isMobile ? "1rem" : "1.25rem",
      padding: "6px 20px",
      marginBottom: 18,
    },
    heroTitle: {
      fontSize: isMobile ? "2.6rem" : "7.2rem",
      fontWeight: 800,
      lineHeight: 1.1,
      marginBottom: 16,
      letterSpacing: "-2px",
    },
    heroTitleHighlight: {
      color: "#3a5cff",
      fontWeight: 800,
      fontSize: isMobile ? "2.2rem" : "6.2rem",
    },
    section: {
      display: "flex",
      flexDirection: isMobile ? "column" : "row",
      justifyContent: "center",
      alignItems: "flex-start",
      gap: 32,
      margin: "0 auto 80px auto",
      maxWidth: 1100,
      marginTop: 200,
      padding: isMobile ? 20 : 0,
    },
    demoCard: {
      background: "#fff",
      borderRadius: "18px",
      boxShadow: "0 4px 32px rgba(0,0,0,0.06)",
      padding: 32,
      display: "flex",
      flexDirection: isMobile ? "column" : "row",
      gap: 32,
      alignItems: "flex-start",
    },
    demoImg: {
      width: isMobile ? "100%" : 340,
      height: isMobile ? 200 : 240,
      background: "#f4f7fa",
      borderRadius: "12px",
      border: "2px solid #eaf0ff",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    chatBox: {
      background: "#f8faff",
      borderRadius: "12px",
      padding: "18px 18px 8px 18px",
      width: isMobile ? "100%" : 320,
      minHeight: 180,
      fontSize: "1rem",
      boxShadow: "0 2px 8px rgba(58,92,255,0.05)",
    },
    chatMsgUser: {
      background: "#3a5cff",
      color: "#fff",
      borderRadius: "8px",
      padding: "8px 12px",
      margin: "8px 0",
      alignSelf: "flex-end",
      maxWidth: "90%",
      fontWeight: 500,
    },
    chatMsgBot: {
      background: "#fff",
      color: "#222",
      borderRadius: "8px",
      padding: "8px 12px",
      margin: "8px 0",
      alignSelf: "flex-start",
      maxWidth: "90%",
      fontWeight: 400,
      border: "1px solid #eaf0ff",
    },
    benefits: {
      background: "#f4f7fa",
      padding: "64px 20px",
      textAlign: "center",
      marginTop: 200,
    },
    benefitsTitle: {
      fontSize: "2.2rem",
      fontWeight: 700,
      marginBottom: 12,
    },
    benefitsGrid: {
      display: "flex",
      justifyContent: "center",
      gap: 32,
      marginTop: 32,
      flexWrap: "wrap",
      flexDirection: isMobile ? "column" : "row",
      alignItems: "center",
    },
    benefitCard: {
      background: "#fff",
      borderRadius: "14px",
      boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
      padding: "28px 22px",
      minWidth: isMobile ? "auto" : 240,
      maxWidth: 270,
      textAlign: "left",
    },
    cta: {
      textAlign: "center",
      padding: "64px 20px 48px 20px",
    },
    ctaTitle: {
      fontSize: "2rem",
      fontWeight: 700,
      marginBottom: 16,
    },
    footer: {
      borderTop: "1px solid #eaf0ff",
      padding: isMobile ? "32px 20px" : "32px 40px",
      display: "flex",
      flexDirection: isMobile ? "column" : "row",
      justifyContent: "space-between",
      alignItems: "center",
      color: "#555e6e",
      fontSize: "1rem",
      gap: isMobile ? 12 : 0,
    },
    footerLinks: {
      display: "flex",
      gap: 32,
      flexDirection: isMobile ? "column" : "row",
    },
    footerLink: {
      color: "#3a5cff",
      textDecoration: "none",
      fontWeight: 500,
    },
  };

  return (
    <div style={styles.page}>
      {/* Navigation */}
      <nav style={styles.nav}>
        <div style={styles.logo}>Qudemo</div>
        {!isMobile && <a href="https://docs.google.com/forms/d/e/1FAIpQLSd4-JMALr0ALbJHETjmlZflgtQZf9R9zEeR_2b6sZZigVW80g/viewform?usp=sharing&ouid=100207346408315453845"><button style={styles.btn}>Join Waitlist</button></a>}
      </nav>

      {/* Hero Section */}
      <FadeInSection>
      <section style={styles.hero}>
        <div style={styles.badge}>AI-Powered Demo Platform</div>
        <div style={styles.heroTitle}>
          Let your product demo <br />
          <span style={styles.heroTitleHighlight}>answer questions</span>
        </div>
        <div style={styles.heroSub}>
          Create interactive product demos with AI that let buyers self-discover
          your product without waiting for a sales rep.
        </div>
       <a href="https://docs.google.com/forms/d/e/1FAIpQLSd4-JMALr0ALbJHETjmlZflgtQZf9R9zEeR_2b6sZZigVW80g/viewform?usp=sharing&ouid=100207346408315453845"><button style={styles.btn}>Join Waitlist</button></a> 
      </section>
      </FadeInSection>

      {/* Demo Section */}
      <FadeInSection delay={0.3}>
      <section style={styles.section}>
        <div
          style={{
            ...styles.demoCard,
            flexDirection: isMobile ? "column" : "row",
            alignItems: isMobile ? "center" : "flex-start",
            padding: isMobile ? 20 : 32,
          }}
        >
          {/* Demo Image */}
          <div
            style={{
              ...styles.demoImg,
              width: isMobile ? "100%" : 340,
              height: isMobile ? 220 : 240,
            }}
          >
            <div
              style={{
                width: "90%",
                height: "90%",
                background: "#fff",
                borderRadius: 8,
                border: "1px solid #eaf0ff",
                position: "relative",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: 10,
                  left: 10,
                  width: 40,
                  height: 18,
                  background: "#eaf0ff",
                  borderRadius: 6,
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top: 10,
                  left: 60,
                  width: 120,
                  height: 18,
                  background: "#eaf0ff",
                  borderRadius: 6,
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top: 40,
                  left: 10,
                  width: isMobile ? "80%" : 280,
                  height: 40,
                  background: "#eaf0ff",
                  borderRadius: 8,
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top: 90,
                  left: 10,
                  width: isMobile ? "40%" : 120,
                  height: 100,
                  background: "#eaf0ff",
                  borderRadius: 8,
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top: 90,
                  left: isMobile ? "50%" : 140,
                  width: isMobile ? "45%" : 150,
                  height: 100,
                  background: "#eaf0ff",
                  borderRadius: 8,
                }}
              />
            </div>
          </div>

          {/* Chat Box */}
          <div
            style={{
              ...styles.chatBox,
              width: isMobile ? "100%" : 320,
              minHeight: 180,
              marginTop: isMobile ? 24 : 0,
            }}
          >
            <div style={styles.chatMsgUser}>
              How does your dashboard handle large datasets?
            </div>
            <div style={styles.chatMsgBot}>
              Our dashboard uses virtualized rendering to efficiently handle
              millions of rows. We also implement progressive loading and data
              compression to ensure smooth performance even with large datasets,
              while maintaining real-time filtering capabilities.
            </div>
            <div style={styles.chatMsgUser}>
              Can I customize the visualization components?
            </div>
            <div style={styles.chatMsgBot}>
              Yes, all visualization components are fully customizable. You can
              modify colors, sizes, labels, and even create custom chart types
              using our component API. The dashboard also supports theming to
              match your brand identity and comes with 15 pre-built themes.
            </div>
            <input
              style={{
                marginTop: 12,
                width: "95%",
                padding: "8px",
                borderRadius: "6px",
                border: "1px solid #eaf0ff",
                fontSize: "1rem",
              }}
              placeholder="Type your question..."
              disabled
            />
          </div>
        </div>
      </section>
      </FadeInSection>
      

      {/* Benefits Section */}
      <FadeInSection delay={0.3}>
      <section style={styles.benefits}>
        <div style={styles.badge}>Benefits</div>
        <div style={styles.benefitsTitle}>Why use Qudemo?</div>
        <div
          style={{ color: "#555e6e", fontSize: "1.15rem", marginBottom: 24 }}
        >
          Let prospects explore your product without scheduling sales meetings,
          and capture valuable insights from every interaction.
        </div>
        <div style={styles.benefitsGrid}>
          {[ClockIcon, ChartBarIcon, ChartBarSquareIcon, BoltIcon].map(
            (Icon, i) => (
              <div style={styles.benefitCard} key={i}>
                <Icon
                  style={{
                    width: 28,
                    height: 28,
                    color: "#3a5cff",
                    marginBottom: 12,
                  }}
                />
                <div style={styles.benefitTitle}>
                  {
                    [
                      "Save Time",
                      "Increase Engagement",
                      "Capture Insights",
                      "Accelerate Sales",
                    ][i]
                  }
                </div>
                <div style={styles.benefitDesc}>
                  {
                    [
                      "Reduce the time spent on repetitive sales meetings answering the same questions over and over again.",
                      "Interactive demos provide a more engaging experience for buyers, increasing their understanding of your product.",
                      "Gather data on what features prospects are most interested in and what questions they commonly ask.",
                      "Allow buyers to self-serve basic information, so your sales team can focus on high-value conversations.",
                    ][i]
                  }
                </div>
              </div>
            )
          )}
        </div>
      </section>
      </FadeInSection>

      {/* CTA Section */}
      <FadeInSection delay={0.3}>
      <section style={styles.cta}>
        <div style={styles.ctaTitle}>
          Ready to transform your product demos?
        </div>
        <div style={{ color: "#555e6e", fontSize: "1.1rem", marginBottom: 24 }}>
          Create interactive AI-powered demos today and let buyers explore your
          product on their own terms.
        </div>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSd4-JMALr0ALbJHETjmlZflgtQZf9R9zEeR_2b6sZZigVW80g/viewform?usp=sharing&ouid=100207346408315453845"><button style={styles.btn}>Join Waitlist</button></a>}
      </section>
        </FadeInSection>

      {/* Footer */}
      <footer style={styles.footer}>
        <div>
          <span style={{ color: "#3a5cff", fontWeight: 700 }}>Qudemo</span>
          <span style={{ marginLeft: 8 }}>
            AI-Powered Interactive Product Demos
          </span>
        </div>
        <div style={styles.footerLinks}>
          <a href="#" style={styles.footerLink}>
            Example Demo
          </a>
          <a href="#" style={styles.footerLink}>
            Create Qudemo
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
