function licenceDescription(licence){
    var description;
    if (licence === ''){
      return '';
    }else if(licence === 'Apache License 2.0'){
      description = 'This project is covered under the Apache License 2.0, those wishing to learn more about this licence and how to use it may visit [this link](https://opensource.org/license/apache-2-0/)';
    }else if(licence === 'GNU General Public License v3.0'){
      description = 'This project is covered under the GNU General Public License v3.0, those wishing to learn more about this licence and how to use it may visit [this link](https://www.gnu.org/licenses/gpl-3.0)';
    }else if(licence === 'MIT License'){
      description = 'This project is covered under the MIT License, those wishing to learn more about this licence and how to use it may visit [this link](https://opensource.org/license/mit/)';
    }else if(licence === 'BSD 2-Clause "Simplified" License'){
      description = 'This project is covered under the BSD 2-Clause "Simplified" License, those wishing to learn more about this licence and how to use it may visit [this link](https://opensource.org/license/bsd-2-clause/)';
    }
    return description;
  };