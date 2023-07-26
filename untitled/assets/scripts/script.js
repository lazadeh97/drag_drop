$(document).ready(function() {
    $('.mini-image').draggable({
        revert: function(dropped) {
            if (!dropped) {
                return true;
            }
        },
        cursor: 'move',
        helper: 'clone'
    });

    $('.droppable').droppable({
        drop: function(event, ui) {
            var droppedImage = ui.draggable;
            var acceptedCategory = $(this).data('accepted-category');
            if (droppedImage.data('category') === acceptedCategory) {
                $(this).append(ui.draggable[0]);
            }
        }
    });

    function resetImages() {
        location.reload();
    }

    // Make the reset button functionality
    $('#resetButton').click(function() {
        resetImages();
    });
});


