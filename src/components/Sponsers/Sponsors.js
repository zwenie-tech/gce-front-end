import React from 'react';

const Sponsors = () => {
  return (
    <div className="mx-auto p-4 w-80 bg-white bg-opacity-70 rounded-lg">
      <h3 className="text-center mb-4 bg-white bg-opacity-70">Our Supporters Sponsors & Co-Operators</h3>
      <div className="relative bg-green-100 border border-gray-300 rounded-lg text-center py-4 px-6">
        <img
          src="https://s3-alpha-sig.figma.com/img/6a51/dcdb/e1fe195ffadcedd540251084c76ccd26?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QHesrhm5gN0Ptb1WB-7ogpxIq4zXBhKiIXG5WI~tccgzjHjJv8rGPBn0V7-xECeajURp7ICflvITb9ae1cASC7MMQUZQLeXIGXkPyqNycwuAifMl6ohMsamvnEikJWWYRCwFe8WmdXiWCFNZVvIhi8BCBei8AocgFpu2euzwesuUkPSqglFxVex4FAiyU288T84CpGbALcBrzfZStsCiDFiwKnrY2ByPCwVoE39mOaNuhcfZO4jKNIO2xFQn832uid7Hijg2Jrdlh-Tqy6jzSBynmHZGEcOvS0srvqT2kFQWpzes9emaCssT8KKleavLax3rJEyTZ2sXNznOP~qUuw__"
          alt="Sponsors"
          className="absolute top-0 left-0 w-full h-full opacity-50 rounded-lg"
        />
        <div className="relative z-10 bg-white bg-opacity-70 rounded-lg p-4">
          <p className="text-xl font-bold mb-2 bg-white bg-opacity-70">വ്യുക്ഷനെ സെൽഫി മത്സരം 2020-21</p>
          <p className="mb-4">വ്യുക്ഷങ്ങൾ സമർപ്പിക്കുക... ഫോട്ടോ അപ്ലോഡ് ചെയ്യൂ... സമ്മാനങ്ങൾ നേടൂ...</p>
          <p className="mb-2">www.greencleanearth.org</p>
          <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md">Join Now</button>
        </div>
      </div>
    </div>
  );
}

export default Sponsors;
