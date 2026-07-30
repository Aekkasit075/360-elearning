document.addEventListener("DOMContentLoaded", () => {


    const calendarEl = document.getElementById("calendar");


    const modalElement = document.getElementById("scheduleModal");


    const modal = new bootstrap.Modal(modalElement);



    let selectedEvent = null;



    // ==========================
    // Local Storage
    // ==========================


    let savedEvents =
        JSON.parse(localStorage.getItem("schedules")) || [];





    const calendar = new FullCalendar.Calendar(calendarEl, {


        initialView: "dayGridMonth",


        locale: "en",


        height: "auto",


        selectable: true,


        editable: true,



        headerToolbar: {

            left: "prev,next today",

            center: "title",

            right: "dayGridMonth"

        },




        events: savedEvents,






        // ==========================
        // Click Date
        // ==========================


        select(info) {


            selectedEvent = null;



            clearForm();



            document.getElementById("scheduleDate").value =
                info.startStr;



            document.getElementById("modalTitle").innerText =
                "Add Course Schedule";



            modal.show();


        },







        // ==========================
        // Click Event
        // ==========================


        eventClick(info) {



            selectedEvent = info.event;



            document.getElementById("eventId").value =
                info.event.id;



            document.getElementById("scheduleDate").value =
                info.event.startStr.substring(0, 10);



            document.getElementById("courseName").value =
                info.event.title;



            document.getElementById("startTime").value =
                info.event.start
                    ?
                    info.event.start.toTimeString().substring(0, 5)
                    :
                    "";



            document.getElementById("endTime").value =
                info.event.end
                    ?
                    info.event.end.toTimeString().substring(0, 5)
                    :
                    "";



            document.getElementById("scheduleStatus").value =
                info.event.extendedProps.status;



            document.getElementById("scheduleNote").value =
                info.event.extendedProps.note || "";




            document.getElementById("modalTitle").innerText =
                "Edit Course Schedule";



            modal.show();



        },







        // ==========================
        // Drag Event
        // ==========================


        eventDrop() {


            saveCalendar();



        }



    });




    calendar.render();









    // ==========================
    // Save Button
    // ==========================


    document
        .getElementById("saveSchedule")
        .addEventListener("click", () => {



            const date =
                document.getElementById("scheduleDate").value;



            const title =
                document.getElementById("courseName").value;



            const start =
                document.getElementById("startTime").value;



            const end =
                document.getElementById("endTime").value;



            const status =
                document.getElementById("scheduleStatus").value;



            const note =
                document.getElementById("scheduleNote").value;





            if (!title || !date) {


                alert("Please fill course and date");


                return;


            }






            // แก้ไข Event เดิม


            if (selectedEvent) {



                selectedEvent.setProp(
                    "title",
                    title
                );



                selectedEvent.setStart(
                    `${date}T${start}`
                );



                selectedEvent.setEnd(
                    `${date}T${end}`
                );



                selectedEvent.setProp(
                    "color",
                    getStatusColor(status)
                );



                selectedEvent.setExtendedProp(
                    "status",
                    status
                );



                selectedEvent.setExtendedProp(
                    "note",
                    note
                );



            }





            // เพิ่ม Event ใหม่


            else {



                calendar.addEvent({


                    id:
                        Date.now().toString(),



                    title: title,



                    start:
                        `${date}T${start}`,



                    end:
                        `${date}T${end}`,



                    color:
                        getStatusColor(status),



                    extendedProps: {


                        status: status,


                        note: note


                    }


                });



            }






            saveCalendar();



            modal.hide();



            clearForm();



        });









    // ==========================
    // Cancel Schedule
    // ==========================


    document
        .getElementById("cancelSchedule")
        .addEventListener("click", () => {



            if (!selectedEvent) {

                modal.hide();

                return;

            }





            selectedEvent.setExtendedProp(
                "status",
                "Cancelled"
            );



            selectedEvent.setProp(
                "color",
                getStatusColor("Cancelled")
            );



            saveCalendar();



            modal.hide();



        });









    // ==========================
    // Delete Schedule
    // ==========================


    document
        .getElementById("deleteSchedule")
        .addEventListener("click", () => {



            if (selectedEvent) {



                selectedEvent.remove();



                saveCalendar();



            }



            modal.hide();



        });









    // ==========================
    // Save Local Storage
    // ==========================


    function saveCalendar() {



        const events =
            calendar.getEvents().map(event => ({



                id: event.id,



                title: event.title,



                start: event.start.toISOString(),



                end:
                    event.end
                        ?
                        event.end.toISOString()
                        :
                        null,



                color: event.backgroundColor,



                extendedProps: {


                    status:
                        event.extendedProps.status,


                    note:
                        event.extendedProps.note


                }



            }));




        localStorage.setItem(
            "schedules",
            JSON.stringify(events)
        );



    }









    // ==========================
    // Clear Form
    // ==========================


    function clearForm() {



        document.getElementById("eventId").value = "";


        document.getElementById("courseName").value = "";


        document.getElementById("startTime").value = "";


        document.getElementById("endTime").value = "";


        document.getElementById("scheduleStatus").value = "Pending";


        document.getElementById("scheduleNote").value = "";



    }









    // ==========================
    // Status Color
    // ==========================


    function getStatusColor(status) {



        switch (status) {



            case "Proceed":

                return "#33d17a";



            case "Pending":

                return "#ffc107";



            case "Cancelled":

                return "#e74c3c";



            case "Complete":

                return "#3498db";



            default:

                return "#777";



        }



    }



});