

var input_string = "";
var keywords = [];
var total_words_per_input = 0;
var words = [];
var word_spell_out = "";
var key_phrases = [];

// Develop a algorithum in which 

function set_input_string() {
    input_string = document.getElementById("input_text").value;
    document.getElementById("input_string").innerHTML = input_string;
    words = input_string.split(" ");
    total_words_per_input = words.length;
    document.getElementById("word_array").innerHTML = words;
    document.getElementById("num_of_words").innerHTML = words.length;

    key_phrases = 
    [
        "How much calories should I have daily?",
        "What is diabetes?",
        "Why is it important to sleep?"
    ];
    
    keywords = [
        "Calories",
        "Diabetes",
        "Sleep"
    ];
    
}
