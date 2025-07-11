//TODO: create an individual member with details about that member
//TODO: if(isSelected){render details} //name email and phone// create back button that will unselect guest
//TODO: create a const state variable for guest state if it is selected or not

export default function GuestItem({ guest, onSelectGuest, onBack }) {
  return (
    <div
      className="guest-item"
      onClick={() => onSelectGuest && onSelectGuest(guest)}
    >
      <h3>{guest.name}</h3>
      <p>Email: {guest.email}</p>
      <p>Phone: {guest.phone}</p>

      {onBack && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onBack();
          }}
        >
          Back to List
        </button>
      )}
    </div>
  );
}
