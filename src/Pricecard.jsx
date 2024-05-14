const data = [
  {
    name: "FREE",
    title: "$0/month",
    features: [
      { user: "Single User", isEnabled: true },
      { user: "50GB Storage", isEnabled: true },
      { user: "Unlimited Public Projects", isEnabled: true },
      { user: "Community Access", isEnabled: true },
      { user: "Unlimited Private Projects", isEnabled: false },
      { user: "Dedicated Phone Support", isEnabled: false },
      { user: "Free Subdomain", isEnabled: false },
      { user: "Monthly Status Reports", isEnabled: false },
    ],
  },
  {
    name: "PLUS",
    title: "$ 9/month",
    features: [
      { user: "5 Users", isEnabled: true },
      { user: "50GB Storage", isEnabled: true },
      { user: "Unlimited Public Projects", isEnabled: true },
      { user: "Community Access", isEnabled: true },
      { user: "Unlimited Private Projects", isEnabled: true },
      { user: "Dedicated Phone Support", isEnabled: true },
      { user: "Free Subdomain", isEnabled: true },
      { user: "Monthly Status Reports", isEnabled: false },
    ],
  },
  {
    name: "PRO",
    title: "$ 49/month",
    features: [
      { user: "Unlimited Users", isEnabled: true },
      { user: "50GB Storage", isEnabled: true },
      { user: "Unlimited Public Projects", isEnabled: true },
      { user: "Community Access", isEnabled: true },
      { user: "Unlimited Private Projects", isEnabled: true },
      { user: "Dedicated Phone Support", isEnabled: true },
      { user: "Free Subdomain", isEnabled: true },
      { user: "Monthly Status Report", isEnabled: true },
    ],
  },
];

const Subscriptions = () => {
  return (
    <div
      style={{
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        textSize: "100%",
      }}
    >
      {data.map((val) => (
        <div
          key={val.title}
          style={{
            border: "16px solid rgb(53, 132, 235)",
            padding: "20px",
            marginTop: "50px",
          }}
        >
          <h5
            style={{
              fontWeight: "1",
              justifyContent: "center",
              display: "flex",
              alignItems: "center",
              filter: "blur(0.5px)",
            }}
          >
            {val.name}
          </h5>
          <h2 style={{ textAlign: "center", fontSize: "20px" }}>{val.title}</h2>
          <hr></hr>
          {val.features.map((feat) => (
            <h3
              key={feat.user}
              style={{
                fontSize: "15px",
                textDecoration: feat.isEnabled ? "none" : "line-through",
              }}
              className="feat"
            >
              {feat.isEnabled && <i className="fa-solid fa-check"></i>}
              {!feat.isEnabled && <i className="fa-solid fa-xmark"></i>}
              {" "}
              {feat.user}
            </h3>
          ))}
          <button className="button">Button</button>
        </div>
      ))}
    </div>
  );
};

export default Subscriptions;
