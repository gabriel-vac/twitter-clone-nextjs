import React, { useEffect, useState } from 'react';
import { Comment, Tweet } from '../typings';
import TimeAgo from 'react-timeago';
import {
  ChatAlt2Icon,
  HeartIcon,
  SwitchHorizontalIcon,
  UploadIcon,
} from '@heroicons/react/outline';
import { fetchComments } from '../utils/fetchComments';

interface Props {
  tweet: Tweet;
}

function Tweet({ tweet }: Props) {
  const [comments, setComments] = useState<Comment[]>([]);

  const refreshComments = async () => {
    const comments: Comment[] = await fetchComments(tweet._id);
    setComments(comments);
  };

  useEffect(() => {
    refreshComments();
  }, []);

  return (
    <div className="flex flex-col p-5 space-x-3 border-gray-100 border-y">
      <div className="flex space-x-3">
        <img
          className="object-cover w-10 h-10 rounded-full"
          src={tweet.profileImg}
          alt="profileImg"
        />

        <div>
          <div className="flex items-center space-x-1">
            <p className="mr-1 font-bold">{tweet.username}</p>
            <p className="hidden text-sm text-gray-500 sm:inline">
              @{tweet.username.replace(/\s+/g, '').toLowerCase()} ·
            </p>

            <TimeAgo
              className="text-sm text-gray-500"
              date={tweet._createdAt}
            />
          </div>
          <p className="pt-1">{tweet.text}</p>
          {tweet.image && (
            <img
              className="object-cover m-5 mb-1 ml-0 rounded-lg shadow-sm max-h-60"
              src={tweet.image}
            />
          )}
        </div>
      </div>

      <div className="flex justify-between mt-5">
        <div className="flex items-center space-x-3 text-gray-400 cursor-pointer">
          <ChatAlt2Icon className="w-5 h-5" />
          <p>5</p>
        </div>

        <div className="flex items-center space-x-3 text-gray-400 cursor-pointer">
          <SwitchHorizontalIcon className="w-5 h-5" />
        </div>

        <div className="flex items-center space-x-3 text-gray-400 cursor-pointer">
          <HeartIcon className="w-5 h-5" />
        </div>

        <div className="flex items-center space-x-3 text-gray-400 cursor-pointer">
          <UploadIcon className="w-5 h-5" />
        </div>
      </div>

      {/* Comment Box logic */}
      {comments?.length > 0 && (
        <div className="p-5 my-2 mt-5 space-y-5 overflow-y-scroll border-t border-gray-100 max-h-44">
          {comments.map((comment) => (
            <div key={comment._id} className="relative flex space-x-2">
              <hr className="absolute h-8 left-5 top-10 border-x border-twitter/30" />
              <img
                src={comment.profileImg}
                className="object-cover mt-2 rounded-full h-7 w-7"
                alt=""
              />

              <div>
                <div className="flex items-center space-x-1">
                  <p className="mr-1 font-bold">{comment.username}</p>
                  <p className="hidden text-gray-500 text-s lg:inline">
                    @{comment.username.replace(/\s+/g, '').toLowerCase()} ·
                  </p>

                  <TimeAgo
                    className="text-sm text-gray-500"
                    date={comment._createdAt}
                  />
                </div>
                <p>{comment.comment}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Tweet;
