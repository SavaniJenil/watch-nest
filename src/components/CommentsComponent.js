import React from "react";
import Comment from "./Comment";

const commentsData = [
  {
    name: "Jenil Savani",
    text: "Leo will hit in threaters",
    replies: [
      {
        name: "Jenil Savani",
        text: "Leo will hit in threaters",
        replies: [],
      },
      {
        name: "Jenil Savani",
        text: "Leo will hit in threaters",
        replies: [],
      },
    ],
  },
  {
    name: "Jenil Savani",
    text: "Leo will hit in threaters",
    replies: [
      {
        name: "Sameer",
        text: "Vijay sir",
        replies: [
          {
            name: "Sarkar",
            text: "This is a Watch-Nest",
            replies: [
              {
                name: "Jenil Savani",
                text: "Leo will hit in threaters",
                replies: [],
              },
              {
                name: "Jenil Savani",
                text: "Leo will hit in threaters",
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Jenil Savani",
    text: "Leo will hit in threaters",
    replies: [],
  },
  {
    name: "Jenil Savani",
    text: "Leo will hit in threaters",
    replies: [
      {
        name: "Jenil Savani",
        text: "Leo will hit in threaters",
        replies: [],
      },
      {
        name: "Jenil Savani",
        text: "Leo will hit in threaters",
        replies: [],
      },
    ],
  },
  {
    name: "Jenil Savani",
    text: "Leo will hit in threaters",
    replies: [],
  },
];

const CommentsList = ({ comments }) => {
  return (
    <div>
      {comments.map((comment, index) => {
        return (
          <div key={index}>
            <Comment  data={comment} />
            <div className="pl-5 border-l border-black ml-2">
              <CommentsList comments={comment.replies} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

const CommentsComponent = () => {
  return (
    <div className="m-2 p-2">
      <h1 className="text-xl font-bold">Comments</h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsComponent;
