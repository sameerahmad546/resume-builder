import React from 'react';

const BasicInfo = ({basicInfo}) => {
  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold text-blue-600">{basicInfo.name}</h1>
      <p className="text-gray-600 text-sm">Phone: {basicInfo.phone}</p>
      <p className="text-gray-600 text-sm">Email: {basicInfo.email}</p>
      <p className="text-gray-600 text-sm">LinkedIn: {basicInfo.linkedin}</p>
    </div>
  )
};

export default BasicInfo;
