import React, { useState } from 'react';
import { LoadingOutlined, PlusOutlined, EyeInvisibleOutlined, EyeOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';

const getBase64 = (img, callback) => {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
};

const beforeUpload = (file) => {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return isJpgOrPng && isLt2M;
};

const UserProfile = () => {
  const [activeSection, setActiveSection] = useState('profile');
  const [visibleSections, setVisibleSections] = useState({
    pitchDate: true,
    financial: true,
    evaluation: true,
    raise: true
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Buttons */}
      <div className="flex justify-center space-x-4 p-4">
        <button
          className={`px-4 py-2 rounded-lg ${activeSection === 'profile' ? 'bg-[#4c5d34] text-white' : 'bg-[#818763] text-white'}`}
          onClick={() => setActiveSection('profile')}
        >
          User Profile
        </button>
        <button
          className={`px-4 py-2 rounded-lg ${activeSection === 'settings' ? 'bg-[#4c5d34] text-white' : 'bg-[#818763] text-white'}`}
          onClick={() => setActiveSection('settings')}
        >
          Profile Settings
        </button>
        <button
          className={`px-4 py-2 rounded-lg ${activeSection === 'password' ? 'bg-[#4c5d34] text-white' : 'bg-[#818763] text-white'}`}
          onClick={() => setActiveSection('password')}
        >
          Update Password
        </button>
      </div>

      {/* Render Sections Based on Active Button */}
      {activeSection === 'profile' && (
        <div>
          {/* Profile Section */}
          <div className="relative h-40 md:h-60 bg-[#4c5d34]">
            <img
              src="https://via.placeholder.com/1500x400" // Replace this with the actual banner image
              alt="Banner"
              className="object-cover w-full h-full"
            />
            <div className="absolute bottom-0 left-4 transform translate-y-1/2">
              <div className="bg-teal-500 rounded-full h-24 w-24 flex items-center justify-center border-4 border-white">
                <span className="text-white font-bold text-xl">UN</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center p-4">
            <div className="w-full md:w-1/3 bg-white shadow-md rounded-lg p-6 mt-16 md:mt-0">
              <h1 className="text-xl font-bold">@username</h1>
              <p className="text-gray-600">TS FullStack</p>

              <div className="mt-4">
                <h2 className="text-lg font-semibold">About</h2>
                <p className="text-sm text-gray-600 mt-2">
                  Collum brevis pauci numquam eos certe. Deinde speciosus carmen
                  corroboro illo strues tergum curo cohors votum. Vigilo depereo totus
                  solus infit aedificium communis.
                </p>
                <div className="mt-4 space-y-2">
                  <p><strong>Full Name:</strong> admin</p>
                  <p><strong>Role:</strong> Developer</p>
                  <p><strong>Country:</strong> India</p>
                  <p><strong>Phone:</strong> +(123)456-7890</p>
                  {visibleSections.pitchDate && <p><strong>Pitch Date:</strong> 2024-11-15</p>}
                  {visibleSections.financial && <p><strong>Financial:</strong> $100,000</p>}
                  {visibleSections.evaluation && <p><strong>Evaluation:</strong> Positive</p>}
                  {visibleSections.raise && <p><strong>Raise:</strong> $5,000</p>}
                </div>
              </div>
            </div>

            <div className="w-full md:w-2/3 bg-white shadow-md rounded-lg p-6 mt-4 md:mt-0 md:ml-6">
              <h2 className="text-lg font-semibold">Activity Timeline</h2>
              <ul className="mt-4 space-y-4">
                <li className="flex justify-between items-center">
                  <div>
                    <p className="text-sm text-red-600 font-semibold">8 Invoices have been paid</p>
                    <p className="text-gray-600">Invoices have been paid to the company.</p>
                  </div>
                  <span className="text-gray-400 text-sm">Wednesday</span>
                </li>
                <li className="flex justify-between items-center">
                  <div>
                    <p className="text-sm text-green-600 font-semibold">Create a new project for client 😎</p>
                    <p className="text-gray-600">Invoices have been paid to the company.</p>
                  </div>
                  <span className="text-gray-400 text-sm">April, 18</span>
                </li>
                <li className="flex justify-between items-center">
                  <div>
                    <p className="text-sm font-semibold">Invoices have been paid on September</p>
                    <p className="text-gray-600">Invoices have been paid to the company.</p>
                  </div>
                  <span className="text-gray-400 text-sm">January, 10</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {activeSection === 'settings' && (
        <UserProfileSettings
          visibleSections={visibleSections}
          setVisibleSections={setVisibleSections}
        />
      )}
      {activeSection === 'password' && <UpdatePassword />}
    </div>
  );
};

const UserProfileSettings = ({ visibleSections, setVisibleSections }) => {
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState();

  const handleChange = (info) => {
    if (info.file.status === 'uploading') {
      setLoading(true);
      return;
    }
    if (info.file.status === 'done') {
      getBase64(info.file.originFileObj, (url) => {
        setLoading(false);
        setImageUrl(url);
      });
    }
  };

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  const toggleVisibility = (field) => {
    setVisibleSections((prev) => ({
      ...prev,
      [field]: !prev[field]
    }));
  };

  return (
    <div className="container mx-auto p-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
        <div className="flex flex-col items-center justify-center p-5 border rounded-lg shadow-md">
          <Upload
            name="avatar"
            listType="picture-circle"
            className="mb-5"
            showUploadList={false}
            action="/upload.do"
            beforeUpload={beforeUpload}
            onChange={handleChange}
          >
            {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
          </Upload>
          <p className="text-sm text-center mb-1">Allowed: *.jpeg, *.jpg, *.png</p>
          <p className="text-sm text-center">Max size of 3.1 MB</p>
          <div className="flex items-center mt-2">
            <label htmlFor="public-profile" className="mr-2">Public Profile Picture</label>
          </div>
          <button className="mt-4 px-4 py-2 text-white bg-[#4c5d34] rounded-lg">
            Save Image
          </button>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Profile Settings</h2>

          <div className="mb-4">
            <label htmlFor="oldName" className="block text-sm font-semibold">Full Name</label>
            <input
              type="text"
              id="oldName"
              className="w-full p-2 mt-1 border rounded-md"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="oldName" className="block text-sm font-semibold">Role</label>
            <input
              type="text"
              id="oldName"
              className="w-full p-2 mt-1 border rounded-md"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="oldName" className="block text-sm font-semibold">Country</label>
            <input
              type="text"
              id="country"
              className="w-full p-2 mt-1 border rounded-md"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="oldName" className="block text-sm font-semibold">Phone Number</label>
            <input
              type="number"
              id="phone"
              className="w-full p-2 mt-1 border rounded-md"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="pitchDate" className="block text-sm font-semibold">Pitch Date</label>
            <input
              type="date"
              id="pitchDate"
              className="w-full p-2 mt-1 border rounded-md"
            />
            <div className="mt-2 flex items-center" onClick={() => toggleVisibility('pitchDate')}>
              {visibleSections.pitchDate ? <EyeOutlined /> : <EyeInvisibleOutlined />}
              <span className="ml-2 text-sm text-gray-500 hover:text-black">Show on</span>
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="financial" className="block text-sm font-semibold">Financial</label>
            <input
              type="number"
              id="financial"
              className="w-full p-2 mt-1 border rounded-md"
            />
            <div className="mt-2 flex items-center" onClick={() => toggleVisibility('financial')}>
              {visibleSections.financial ? <EyeOutlined /> : <EyeInvisibleOutlined />}
              <span className="ml-2 text-sm text-gray-500 hover:text-black">Show on</span>
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="evaluation" className="block text-sm font-semibold">Evaluation</label>
            <input
              type="text"
              id="evaluation"
              className="w-full p-2 mt-1 border rounded-md"
            />
            <div className="mt-2 flex items-center" onClick={() => toggleVisibility('evaluation')}>
              {visibleSections.evaluation ? <EyeOutlined /> : <EyeInvisibleOutlined />}
              <span className="ml-2 text-sm text-gray-500 hover:text-black">Show on</span>
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="raise" className="block text-sm font-semibold">Raise</label>
            <input
              type="number"
              id="raise"
              className="w-full p-2 mt-1 border rounded-md"
            />
            <div className="mt-2 flex items-center" onClick={() => toggleVisibility('raise')}>
              {visibleSections.raise ? <EyeOutlined /> : <EyeInvisibleOutlined />}
              <span className="ml-2 text-sm text-gray-500 hover:text-black">Show on</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const UpdatePassword = () => {
  return (
    <div className="container mx-auto p-5">
      <h2 className="text-xl font-semibold mb-4">Update Password</h2>
      <div className="mb-4">
        <label htmlFor="currentPassword" className="block text-sm font-semibold">Current Password</label>
        <input
          type="password"
          id="currentPassword"
          className="w-full p-2 mt-1 border rounded-md"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="newPassword" className="block text-sm font-semibold">New Password</label>
        <input
          type="password"
          id="newPassword"
          className="w-full p-2 mt-1 border rounded-md"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="confirmPassword" className="block text-sm font-semibold">Confirm New Password</label>
        <input
          type="password"
          id="confirmPassword"
          className="w-full p-2 mt-1 border rounded-md"
        />
      </div>
      <button className="px-4 py-2 text-white bg-[#4c5d34] rounded-lg">Update Password</button>
    </div>
  );
};

export default UserProfile;
