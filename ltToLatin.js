String.prototype.ltToLatin = function() {
    var search  = 'ĄČĘĖĮŠŲŪŽąčęėįšųūž';
    var replace = 'ACEEISUUZaceeisuuz';
    return this.replace(new RegExp('[' + search + ']', 'g'), function(s) { var i = search.indexOf(s); return replace[i] })
};
