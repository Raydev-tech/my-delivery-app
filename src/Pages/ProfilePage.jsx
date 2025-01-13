import { useState } from "react";

const UserProfile = () => {
  const [name, setName] = useState("John Doe");
  const [email, setEmail] = useState("johndoe@example.com");
  const [newPassword, setNewPassword] = useState("");
  const [profilePicture, setProfilePicture] = useState("/default-avatar.png");
  const [previewPicture, setPreviewPicture] = useState(profilePicture);

  const handlePictureChange = () => {
    const file = event.target.files?.[0];
    if (file) {
      const previewUrl = URL.createObjectURL(file);
      setPreviewPicture(previewUrl);
    }
  };

  const handleSave = () => {
    setProfilePicture(previewPicture);
    alert("Profile updated successfully!");
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">My Profile</h2>

      <div className="flex flex-col items-center mb-6">
        <div className="relative w-24 h-24">
          <img
            src={previewPicture}
            alt="Profile"
            className="w-full h-full object-cover rounded-full border"
          />
          <label
            htmlFor="profilePicture"
            className="absolute bottom-0 right-0 bg-gray-500 text-white text-xs px-2 py-1 rounded-full cursor-pointer"
          >
            Edit
          </label>
          <input
            id="profilePicture"
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handlePictureChange}
          />
        </div>
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSave();
        }}
        className="space-y-4"
      >
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Full Name
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Email Address
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border px-4 py-2 rounded-lg bg-gray-100 focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">
            New Password
          </label>
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
            placeholder="Leave blank to keep current password"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-gray-800 text-white py-2 rounded-lg hover:bg-gray-900 transition"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default UserProfile;
