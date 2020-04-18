//sidebar opening
$("#menu-icon").click(function(e){
    e.preventDefault();
    $('.ui.sidebar')
        .sidebar('setting', 'transition', 'overlay')
        .sidebar('toggle');
});

//modal open on click
$("#ajouterPatient").click(function(e){
    $(".ui.modal")
        .modal("show");
});

//form validation for patient
$('.ui.form')
  .form({
    fields: {
      nom     : 'empty',
      prenom   : 'empty',
      adresse : 'empty',
      mail : 'empty',
      telephone   : ['number', 'empty'],
      informationMedicale : 'empty'
    }
  })
;
