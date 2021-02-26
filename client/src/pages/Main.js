import { Layout, Button, Avatar } from "antd";

const { Content } = Layout;

function Main() {
  return (
    <div className="site-layout-content">
      <Button ghost className="main-button">
        <Avatar
          src="https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHw%3D&auto=format&fit=crop&w=500&q=60"
          size={125}
          className="main-avatar"
        />
      </Button>
    </div>
  );
}

export default Main;
