import { BellFilled, MailOutlined } from "@ant-design/icons";
import { Badge, Drawer, Image, List, Space, Typography } from "antd";
import { useEffect, useState } from "react";
import { getComments, getOrders } from "../../API";

function AppHeader() {
  const [comments, setComments] = useState([]);
  const [orders, setOrders] = useState([]);
  const [commentsOpen, setCommentsOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);

  useEffect(() => {
    getComments().then((res) => {
      setComments(res.comments);
    });
    getOrders().then((res) => {
      setOrders(res.products);
    });
  }, []);

  return (
    <div className="AppHeader">
      <Image
        width={50}
        preview={false}
        style={{ borderRadius: "50%" }}
        src="https://t3.ftcdn.net/jpg/04/20/92/96/240_F_420929614_QF4HeQQZgM8l2VgjlxScVOrup7ZzMxed.jpg"
      />
      <Typography.Title>Oguzhan's Dashboard</Typography.Title>
      <Space>
        <Badge count={Object.keys(comments).length} dot>
          <MailOutlined
            style={{ fontSize: 24 }}
            onClick={() => setCommentsOpen(true)}
          />
        </Badge>
        <Badge count={Object.keys(orders).length}>
          <BellFilled
            style={{ fontSize: 24 }}
            onClick={() => setNotificationsOpen(true)}
          />
        </Badge>
      </Space>
      <Drawer
        title="Comments"
        open={commentsOpen}
        maskClosable
        onClose={() => setCommentsOpen(false)}
      >
        <List
          dataSource={comments}
          renderItem={(item) => {
            return <List.Item>{item.body}</List.Item>;
          }}
        />
      </Drawer>
      <Drawer
        title="Notifications"
        open={notificationsOpen}
        maskClosable
        onClose={() => setNotificationsOpen(false)}
      >
        <List
          dataSource={orders}
          renderItem={(item) => {
            return (
              <List.Item>
                <Typography.Text strong>{item.title}</Typography.Text> has been
                ordered!
              </List.Item>
            );
          }}
        />
      </Drawer>
    </div>
  );
}

export default AppHeader;
