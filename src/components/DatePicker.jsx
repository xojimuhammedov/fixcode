// 1. Birinchi qadam - paketni o'rnatish
// npm orqali:
// npm install react - datepicker date - fns--save

// yoki yarn orqali:
// yarn add react - datepicker date - fns

// 2. Komponentda ishlatish
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; // Tayyor stillar
import uz from 'date-fns/locale/uz'; // O'zbek tili uchun (agar kerak bo'lsa)

function MyDatePicker() {
    const [selectedDate, setSelectedDate] = useState(new Date());

    return (
        <div>
            <DatePicker
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                locale={uz} // O'zbek tilida ko'rsatish uchun
                dateFormat="dd/MM/yyyy" // Sana formati
                className="form-control" // CSS class
                placeholderText="Sanani tanlang"
            />
        </div>
    );
}

export default MyDatePicker;

// 3. Qo'shimcha xususiyatlar:

// Range tanlash (oraliqni tanlash)
function DateRangePicker() {
    const [dateRange, setDateRange] = useState([null, null]);
    const [startDate, endDate] = dateRange;

    return (
        <DatePicker
            selectsRange={true}
            startDate={startDate}
            endDate={endDate}
            onChange={(update) => setDateRange(update)}
            placeholderText="Sana oralig'ini tanlang"
        />
    );
}

// Ko'p sana tanlovchan
function MultiDatePicker() {
    const [selectedDates, setSelectedDates] = useState([]);

    return (
        <DatePicker
            selected={selectedDates[0]}
            onChange={(dates) => setSelectedDates(dates)}
            multiple
            placeholderText="Bir nechta sana tanlang"
        />
    );
}

// Vaqt tanlovchan
function DateTimePicker() {
    const [selectedDate, setSelectedDate] = useState(new Date());

    return (
        <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={15}
            dateFormat="dd/MM/yyyy HH:mm"
            placeholderText="Sana va vaqtni tanlang"
        />
    );
}

// Maxsus dizayn uchun shaxsiy renderlar
function CustomDatePicker() {
    const [selectedDate, setSelectedDate] = useState(new Date());

    // Maxsus kun rendereri
    const renderDayContents = (day, date) => {
        const tooltipText = `Tooltip for date: ${date}`;
        return <span title={tooltipText}>{day}</span>;
    };

    // Tasviringizdagi kabi ba'zi kunlarga maxsus belgilar qo'shish
    const renderCustomHeader = ({
        date,
        changeYear,
        changeMonth,
        decreaseMonth,
        increaseMonth,
        prevMonthButtonDisabled,
        nextMonthButtonDisabled,
    }) => (
        <div className="custom-header">
            <button onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
                {"<"}
            </button>
            <span className="month-year">
                {date.toLocaleDateString("uz", {
                    month: "long",
                    year: "numeric",
                })}
            </span>
            <button onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
                {">"}
            </button>
        </div>
    );

    return (
        <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            renderDayContents={renderDayContents}
            renderCustomHeader={renderCustomHeader}
            dayClassName={(date) =>
                date.getDate() === 20 ? "blue-day" : undefined
            }
        />
    );
}