import exp from 'constants';
import React from 'react';
import { FiSun, FiClock } from 'react-icons/fi';


type AnnouncementProps = {
  icon: JSX.Element;
  text: string;
};

const Announcement: React.FC<AnnouncementProps> = ({ icon, text }) => (
  <div style={{ backgroundColor: '#F8F8F8'}} className="flex items-center space-x-2 bg-white p-4 rounded-lg shadow-sm">
    {icon}
    <span className="text-gray-700">{text}</span>
  </div>
);

type ScheduleItemProps = {
  title: string;
  time: string;
  status: 'past' | 'today' | 'upcoming' | 'none';
  date: string;
};

const statusColors = {
  past: 'bg-blue-100',
  today: 'bg-pink-400',
  upcoming: 'bg-blue-100',
  none: 'bg-pink-100',
};

const textColors = {
  past: 'text-indigo-600',
  today: 'text-white',
  upcoming: 'text-indigo-500',
  none: 'text-pink-400',
};

const ScheduleItem: React.FC<ScheduleItemProps> = ({ title, time, date, status }) => (
    <div className={`flex items-center justify-between p-4 rounded-lg ${statusColors[status]} shadow-sm`}>
      <div>
        <p className={`${textColors[status]} font-normal text-sm`}>{title}</p>
        <p className={`${textColors[status]} text-lg font-semibold`}>{time}</p>
      </div>
      <p className={`${textColors[status]} text-sm`}>{date}</p>
    </div>
  );

const Announcements: React.FC = () => {
    return (
      <div className="p-6 max-w-lg mx-auto space-y-8">
        <div>
          <h2 className="text-xl font-semibold mb-4">Announcements</h2>
          <div className="space-y-4 bg-white p-4 rounded-lg shadow-sm">
            <Announcement icon={<FiSun className="text-yellow-500" />} text="On account of Independence Day, August 15th will be a holiday." />
            <Announcement icon={<FiClock className="text-blue-500" />} text="Reminder to finish your assignments and submit them by Monday." />
          </div>
        </div>
  
        <div>
          <h2 className="text-xl font-semibold mb-4">Your Class Schedule</h2>
          <div className="space-y-4 bg-white p-4 rounded-lg shadow-sm">
          <ScheduleItem title="Class 7, Science | Live Class" time="Tuesday, 5:00 - 5:50 PM" date="Yesterday" status="past" />
          <ScheduleItem title="Class 7, Science | Live Class" time="Tuesday, 6:30 - 7:15 PM" date="Today" status="today" />
          <ScheduleItem title="Class 7, Science | Live Class" time="Tuesday, 5:00 - 5:50 PM" date="Tomorrow" status="upcoming" />
          <ScheduleItem title="Class 7, Science | Live Class" time="Tuesday, 5:00 - 5:50 PM" date="23rd Sep, 2024" status="none" />
        </div>
      </div>
    </div>
    );
}
export default Announcements