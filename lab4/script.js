class FittingAppointment {
    constructor(clientName, clientEmail, fittingDate, suitModel, consent) {
        this.clientName = clientName;
        this.clientEmail = clientEmail;
        this.fittingDate = fittingDate;
        this.suitModel = suitModel;
        this.consent = consent;
        this.createdAt = new Date().toLocaleString('ru-RU');
    }

    printFormatted() {
        console.group('Новая заявка на примерку');
        console.log(`Клиент: ${this.clientName}`);
        console.log(`Email: ${this.clientEmail}`);
        console.log(`Дата примерки: ${this.fittingDate}`);
        console.log(`Модель костюма: ${this.suitModel}`);
        console.log(`Согласие на обработку данных: ${this.consent ? 'Да' : 'Нет'}`);
        console.log(`Время оформления: ${this.createdAt}`);
        console.groupEnd();
    }
}

const fittingForm = document.getElementById('fittingForm');
const formStatus = document.getElementById('formStatus');

fittingForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const appointment = new FittingAppointment(
        document.getElementById('clientName').value.trim(),
        document.getElementById('clientEmail').value.trim(),
        document.getElementById('fittingDate').value,
        document.getElementById('suitModel').value,
        document.getElementById('consent').checked
    );

    appointment.printFormatted();

    formStatus.textContent = `Спасибо, ${appointment.clientName}! Заявка сформирована и выведена в консоль.`;
    fittingForm.reset();
});