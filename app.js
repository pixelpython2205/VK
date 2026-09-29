const ageFields = document.querySelectorAll("[data-age][data-dob]");

for (const field of ageFields) {
    const [year, month, day] = field.dataset.dob.split("-").map(Number);
    const today = new Date();
    let age = today.getFullYear() - year;
    const birthdayHasPassed = today.getMonth() + 1 > month || (today.getMonth() + 1 === month && today.getDate() >= day);

    if (!birthdayHasPassed) age -= 1;
    field.textContent = String(age);
}