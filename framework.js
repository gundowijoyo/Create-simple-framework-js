(function (global) {
    // Fungsi konstruktor untuk objek $
    function $(selector) {
        // Memastikan fungsi dipanggil dengan kata kunci 'new'
        if (!(this instanceof $)) {
            return new $(selector);
        }

        // Memilih semua elemen yang sesuai dengan selektor CSS yang diberikan
        this.elements = document.querySelectorAll(selector);
    }

    // Metode untuk menambahkan event listener ke elemen yang dipilih
    $.prototype.on = function (event, callback) {
        // Mengiterasi setiap elemen dan menambahkan event listener
        this.elements.forEach(function (element) {
            element.addEventListener(event, callback);
        });
        // Mengembalikan 'this' untuk memungkinkan chaining metode
        return this;
    };

    // Metode untuk mengatur properti CSS pada elemen yang dipilih
    $.prototype.css = function (property, value) {
        // Mengiterasi setiap elemen dan mengatur properti CSS
        this.elements.forEach(function (element) {
            element.style[property] = value;
        });
        // Mengembalikan 'this' untuk memungkinkan chaining metode
        return this;
    };

    // Metode untuk menambahkan kelas CSS ke elemen yang dipilih
    $.prototype.classAdd = function (className) {
        // Mengiterasi setiap elemen dan menambahkan kelas
        this.elements.forEach(function (element) {
            element.classList.add(className);
        });
        // Mengembalikan 'this' untuk memungkinkan chaining metode
        return this;
    };

    // Metode untuk menghapus kelas CSS dari elemen yang dipilih
    $.prototype.classRemove = function (className) {
        // Mengiterasi setiap elemen dan menghapus kelas
        this.elements.forEach(function (element) {
            element.classList.remove(className);
        });
        // Mengembalikan 'this' untuk memungkinkan chaining metode
        return this;
    };

    // Metode untuk toggle (aktif/nonaktif) kelas CSS pada elemen yang dipilih
    $.prototype.classToggle = function (className) {
        // Mengiterasi setiap elemen dan toggle kelas
        this.elements.forEach(function (element) {
            element.classList.toggle(className);
        });
        // Mengembalikan 'this' untuk memungkinkan chaining metode
        return this;
    };

    // Menghubungkan fungsi $ ke objek global (window)
    global.$ = $;
})(window);
