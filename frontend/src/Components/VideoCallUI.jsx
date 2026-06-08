import {
  ToggleAudioPublishingButton,
  ToggleVideoPublishingButton,
  CallingState,
  SpeakerLayout,
  useCallStateHooks,
} from "@stream-io/video-react-sdk";
import {
  Loader2Icon,
  MessageSquareIcon,
  PhoneOff,
  UsersIcon,
  XIcon,
} from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router";
import {
  Channel,
  Chat,
  MessageInput,
  MessageList,
  Thread,
  Window,
} from "stream-chat-react";

import "@stream-io/video-react-sdk/dist/css/styles.css";
import "stream-chat-react/dist/css/v2/index.css";

function VideoCallUI({ chatClient, channel }) {
  const navigate = useNavigate();

  const { useCallCallingState, useParticipantCount } =
    useCallStateHooks();

  const callingState = useCallCallingState();
  const participantCount = useParticipantCount();

  const [isChatOpen, setIsChatOpen] = useState(false);

  if (callingState === CallingState.JOINING) {
    return (
      <div className="h-full flex items-center justify-center">
        <div className="text-center">
          <Loader2Icon className="size-12 mx-auto animate-spin text-primary mb-4" />
          <p className="text-lg font-medium">
            Joining call...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full flex gap-4 relative str-video">
      {/* VIDEO SECTION */}
      <div className="flex flex-col gap-4">
        {/* HEADER */}
        <div className="bg-base-100/70 backdrop-blur-xl border border-base-content/10 rounded-2xl px-4 py-3 flex items-center justify-between shadow-lg">
          <div className="flex items-center gap-2">
            <UsersIcon className="size-5 text-primary" />

            <span className="font-semibold">
              {participantCount}{" "}
              {participantCount === 1
                ? "participant"
                : "participants"}
            </span>
          </div>

          {chatClient && channel && (
            <button
              onClick={() =>
                setIsChatOpen(!isChatOpen)
              }
              className={`btn btn-sm rounded-xl gap-2 ${
                isChatOpen
                  ? "btn-primary"
                  : "btn-ghost"
              }`}
            >
              <MessageSquareIcon className="size-4" />
              Chat
            </button>
          )}
        </div>

        {/* VIDEO */}
        <div
          className={`
            bg-base-300
            rounded-2xl
            overflow-hidden
            border
            border-base-content/10
            shadow-xl
            transition-all
            duration-300

            ${
              participantCount <= 1
                ? "h-[320px] w-[390px]"
                : "h-[460px] w-[520px]"
            }
          `}
        >
          <SpeakerLayout />
        </div>

        {/* CONTROLS */}
       <div className="flex justify-center gap-3">
  <ToggleAudioPublishingButton />
  <ToggleVideoPublishingButton />
  <button 
    className="btn rounded-xl bg-[#19232D]"
    onClick={() => navigate("/dashboard")}
  >
     <PhoneOff  size={24} />
  </button>
</div>
      </div>

      {/* CHAT */}
      {chatClient && channel && (
        <div
          className={`
            flex flex-col
            rounded-2xl
            overflow-hidden
            bg-[#272a30]
            border border-[#3a3d44]
            shadow-xl
            transition-all
            duration-300

            ${
              isChatOpen
                ? "w-[360px] opacity-100"
                : "w-0 opacity-0 border-0"
            }
          `}
        >
          {isChatOpen && (
            <>
              {/* CHAT HEADER */}
              <div className="bg-[#1c1e22] p-4 border-b border-[#3a3d44] flex items-center justify-between">
                <h3 className="font-bold text-white">
                  Session Chat
                </h3>

                <button
                  onClick={() =>
                    setIsChatOpen(false)
                  }
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <XIcon className="size-5" />
                </button>
              </div>

              {/* CHAT CONTENT */}
              <div className="flex-1 overflow-hidden stream-chat-dark">
                <Chat
                  client={chatClient}
                  theme="str-chat__theme-dark"
                >
                  <Channel channel={channel}>
                    <Window>
                      <MessageList />
                      <MessageInput />
                    </Window>

                    <Thread />
                  </Channel>
                </Chat>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default VideoCallUI;