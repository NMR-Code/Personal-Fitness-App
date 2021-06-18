const newFormHandler = async (event) => {
  event.preventDefault();

  //was project-name, need-funding, n project description
  const name = document.querySelector('#profile-name').value.trim();
  const bodyWeight = document.querySelector('#body-weight').value.trim();
  const goalWeight = document.querySelector('#goal-weight').value.trim();
  const workoutsPerWeek = document.querySelector('#workout-perweek').value.trim();

 
  if (name && bodyWeight && goalWeight && workoutsPerWeek) {
    const response = await fetch(`/api/profile`, {
      method: 'POST',
      body: JSON.stringify({ name, bodyWeight, goalWeight, workoutsPerWeek }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to create profile');
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/profile/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to delete profile');
    }
  }
};

document
  .querySelector('.new-project-form')
  .addEventListener('submit', newFormHandler);

document
  .querySelector('.project-list')
  .addEventListener('click', delButtonHandler);
