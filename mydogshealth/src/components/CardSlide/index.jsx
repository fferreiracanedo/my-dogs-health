import { Box, Image, Text } from '@chakra-ui/react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

const CardSlide = () => {
  return (
    <Carousel
      centerSlidePercentage="true"
      width='400px'
      
      autoPlay
      showArrows="false"
      verticalSwipe="natural"
    >
      <Box>
        <Image src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBISFRUVFRUYGBISGBIYEhISGBESERISGBgZGRkYGBgcIS4lHB4rIRgYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QGBIRGDEhISE0NDQxMTExNDExMTQ0MTQ0NDE0NDQxNDExNDQxMTE0MTExNDQ0NDQxNDQ/MT80MTExMf/AABEIALcBEwMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAEAAIDBQYBB//EADUQAAIBAgUCBQIFAwUBAQAAAAECAAMRBAUSITFBUQYiYXGBE5EyobHB8BTR4QdCUpLxYiP/xAAYAQEBAQEBAAAAAAAAAAAAAAABAAIDBP/EABwRAQEBAQADAQEAAAAAAAAAAAABEQISITFBA//aAAwDAQACEQMRAD8AxFOHUWtAEhdMzOuo1HnXrQVnkbvLTgv69pz+ogDPOhpahy1LyenUlejQmm0tODlaTU6kEV4+m0NOLFDC6bwBWkqvHVg4NIXaQipGF4WqRIxkyGDqZMlrEk2Uckw1YIotvD6bAzN184VT5VBXob8/Mscvx61RdTYj8SnZgf51jlg9VdU5MsosTmYpuin/AHkAH5t+4ljRxN+sdGDGWDVBH/WEHrVIeRnIavKysIfVeA1TM2tSBGWMKR5O8TSlVQOkgqrDDB6wmmVdWg4MIrGCM0kJQyW8DR5KHjEkcSG847xmuLKS0UZeKSRU4QpgySdTMk9mkLNHsZE0k5ePUyMzoMknQydGgytJkaTUFK0JowJDDaUCKDSVDeDiSYiuadPyjz1LgN1VfT3lJtF9CWAX8TKp7E3P2EjQ0yLl9hzYWt76rSg8qeZzYDckneVOZZ2X8q/hHHFzOnjGb01WL8QYSjsAXbsN/wDEz+Z+K6lTyogWn/x/8meeoD0/Uf4nQ9M9Cp/7D+4jJJ8YvVotMz81yvuQTv7iGUMz0MGRiD+3YykcfPtGAy0av8Tmz1HQlvwm47jj+01/h/HM9Mlj5tTXnmYY3m88PvsBbZgGv6mZ6mxrnr20y4mcqV7yvcleY36s413mCWeD1XkbvB6lSROZ4i8FapOfUjGaJ1yGq0b9SR1XmozQuIaAu0JqwRxFmkGjw8iE7eSPZ43VGFoy80E/1IpBeKSEqZIGjAIiZkpNUYZxTOmSNMbePIjCJI5TCEMgQSdBCmCacsMOsCoCWVEQaEU6dyBsPU7AQDNa9Rn00kLBRYM/lpi3XfmGica0Z1gs1nsRlezPWYubE6VOhAfc8zLVeTtNdmmXVahJDLb/AI+YTMYgshKnp2tN83XPqBIp0mICaYK06FvOou8Mp4Y/zmRCrSM3Ph7ELoUMNwLA+kzdPDSzwVQU9rix/W/8+8Ym1H0aoCk2I46QevlbgXXcekqUxakc77/pt+kscFjSL6XuBvp9Nv7y64la56sC1UZdiLQKoZqUeniBpYWb8xKnNclqU7so1U7XDDfb1nHrix0nUqmYxhaSV6TLyIOTCFJqjGeITjCKQVDB2hLiQssWai0xESQiMMgiYRklaRzQciiikh7LaQvCnWDOJkkpjhGqJIEkjTG2k1ohTgTFEmUTipJ0SBkT4cSwpmA0hC6ZgREeq9TwJxBfgH7RVyEF3Nv1lJp1V5sajKbstOmOC9yzeyrMZiR5tm1etrfrLfNMWlRjzpHck39/7SvcqovYAdup/tO0mRw6uhUo9TEq6jYRFzUIA+AJocty0Dpz1NrX7HcflEK/C4QDn9oWFtx+VtviaBMt6stlA3JuDbjcEAgetukFzXKzRQOp1UydjtqRux9P57pU1Sp9pEtQXI9Dz32/tOOxN+g/yf7wSsTc/F/58SQs1iOD/wC7Canwcv1HZb7soHrYkXP6THUgSD6kAe56fzvPRv8AT/Lvpq1d9l203627X53/AEkmixGCp0SLfiI9h7nrABm2htBII9toL4gznUwW1u9v0Nufi/WUOJxSnjbvfk/vb3lBjS5lhUrgWAU339ZlMThGRiLGw6yzy/HlhpJ3H4Tx8RVcSSdLC5h1zvxrnpS6LThEssVTprbcC/QbmRKlMjY3PqROfjW9VrrIWWH4igy8/fpAmgkTSIyVjIWMYKa0aBExiUzQNtFH2ikFsySJqMOKRaJy0g0oSQUYWlOSrSh5ED9COGHliuHk64YQ0qoUY5acsKlICDM4G0fp0xUhFFPiSYdA0No4S/PEPe4tdpUlAvqlF4gsw0i9/wDiJqaVCmg/EPYzGeJj9N767r0sbFZ2559MddM/i8JUpqGYaQeL2v8AAlc5JMLr1dR6k9L3Mdg8KWOwv3PabYT5VgmZ1Ci7Na1vWazNMqxGERWVh5lLMwFimkEkHvsPmOySilF0PmL7XNj5Vv0v+cPz3G0zVdHY6NyrKAxuy7AdhuREqlsNmaItV6lKxAP0KtRFcqRfTcgAMR/tv137SOm/1kqBTZStMhTfUCxVgSOu11PtKrHLqcfUd207JbW+vf8A2MdlF/tCcnrGm9Q2AUm1rgA2B3YnoPne0zLpsz9VmJw5plr8ngb8ft0+/pAXI++59ZY5i6k+Q7X/AA86vX29OJ3I8qfFVVRRcnc82562+8QtPDeQtWAYi1MDW7sbKAf3sDNHmOYU6Y0JsoFhp2XbrcfsCfaS+JMfSwdJMNTN3FiwG2tz5SzHsLWHtMLVxWo3fj/ib2J9utopY4h9V/Nfvz+ogiVSOQSO/lkIN/7WAH2tGtUHX77ftFCUxhU3F7+pH7Ql85LDcgHubXmexGIsdunxBXqaoaGh/q0b8Tj78ztHHU1PO0z1GqFO4uPSWuGVH/Cduo6/aRlaGq4dQUa6/FhK90jcOmg3U2PpsD7iWD0wyhh8jsZz65z26Sqt0MgZDLVqUYuHhFVb/TmIUCJcDDxf081gxUaDFLT+niksHWnVScUyRZwrJ6JJUSNWSrM0pVWSCNUxtWqFEeZqD42oAJncVi7NCMzxvO8zmJrXM7884LWqyvHdpoMPiLnnf8p5/gK5HBmryunUbfp2m/CfRovPsSgQ3J1dLcTzzE1GdtyT79pr/EOHYDc6b9De0xbNYxoqVEmgy2mtNA3Jbt/tt1mc134lrg3uFUXLHYCBXeEpszKeoIZWtf7kbwjPVZnLWGkW21arna25G3PvLXCYVKQG3mC284YLq9Ohjcc6OBvdxwpXZd+AeB7CKZkkUkJvdrCyCwVetz88Srw6uWYk7cHcC9+202lPIzUZQyNc7kgMdx0YX/TvNRh/BdPSoZdhqPlFt7KLeg2v72kq80weSPVZUVW829yDxt07cCbvB5dTyig1VrGoy7tY7XtcX7n9PmbPKskp07Eji3NtyJgv9XazaES/4n3F+QAbbexP8MEwoxRxFY1KmwfzMdyQdiPgeWQYlKTWIcCwH4rXPqQb/b2gIqEXW+/B/nxHYZOSWpqen1fr7nuuhTb3YgSSz0EJdV1DqaZN/wDqPniVVfEep+dz95YYDE2LI1lZLgkFTtfkFRYiV2Y7sT16kW+9ooG7XjVnIoMukx9GoyG67ESOS037/Eku6OIuFdeps47GaPCLdL+syGBrhHsfwNsfT1mlwFbQ+knytz29xDqby1KL+nEKcLZIwicJW0SpHFRJBOMZqdLQ+mKOvFHyWo1WSKZHrjlM5jBCGSKYOpkqGZxCAZWZhWt1lqF2mczV7GduOQqMW95V1DC67wFzOrNG4CpYz0fw4EpqHqEajwt+P8zzTBvYzV5XU1kat7cDpGFceMMzWomlkFj+EjkTzaqovNjneIJ20gCZqulzcD7SqC0m3mn8OYVGY1Gvppi5tfnpeZyjQZjZVJPZQSfynofhnL6gw+nQwaq2kAgqfzG0olnhcDUxNggsDvq4bT7W/XtNbl3hdEALX19dyby2yXLEw1NUAGrlj6mHM4ELRaHw+Bp0+Bv+Q9pI9XoBzIq2JIOwipkE33vBJi1p4z/qk/1KiheQTvZvMPf7z1+q88c8cKi1nNvMC3U2NzyL9d/zlFGLp0NIJPtc/wA4jalPVyCLXsQCwcFidrdRfrbiR4hyR13Jvz3EYiObdvylVKT3Q3Ha3qOu9pDUe8tXrJ9BkYqX2sQNwO0qGMoqYBEY6lz8GJgIgyOWOVI7DUGqMEUXZzZR3JkXP249pdYLF3VSeRt8gf2lfiMrr0msyNwDcAkETuFNtSnYg/II2lKo2+BxYqIN/MoF+9uhkjNMtl2LNNwelrEfqJpC4IBHBAI9jOH9OcutSuM8YzzjmRMZmI/VFItUUQdqj0aB6zJ6bQxq0Wpk9MwNXkqVJULJTtM/nNAm5tLha0PTA/UXcczrxRXl1e4MHM1Wd5OysSBtM1VpFTOkosSYZd5q8kwure9gOoFz8TMYJbkT0TIqQRFJUAdCeT8RigTNsMwUWRjfqQPzmWxVMKd0IJ6DqemwnofiLH/TVNNrt/zKqBM06moLtoJbYaGux9rCFIPI8Iajqrttcf8A5oAT8i4Ufme4ntuR5YlFFt0Fh6CY7wdla07eWzH0F56DfSLdoaKrc9zYUFABAZr2LGwA7+sx75tVvf6mr5me/wBY69Q1qQBOlE2AJ3uebfEwVDMqqWGth8malxPccrzsk2f79posLWDi4M8Ly/xLtpfnow5my8FeJddQ03Nx0/zKyF6ExBuVNwO288S8aY7ViCvIRm49yTPXxVVEdwRpJJ6WFuZ4RnOLFbEO9ranbjt0+ZlIqukpfqbWI9Bb7dPtAXftex6bASWs3QcDn37iQBZIxjtIjJKhkZkCQxpjp1BvEJFw9TSH0nRv5huBbm/bmeieHvCaNhaWJsVxCm/JsdL3BI72t9hLvwRldCpR0MgOw1BhYsCOSvpuPUWmq/oxRommPwoNuu3SFrTG4yrc3I/xeYXxDhfp1RUA8lSwa3Afr9x+83WPaxMqsTSSopVhdTyD+s4Trx60sedxf85o8Bf6aX5t+XSVVfJ6imyHUpI32BA9ZdgWAHQbfadO+pZMENaRNJGMYZzhMtFO2nIgIGkyNAw8LwhF4WqCNLdolaWSAEQSugEzutWYdht5qcpe4tMjSe0usvxOjrN8VmrnNcvDqTaea59gNDGwnqlPEq62mR8U4K4JnT9P2MXlzBW2Fz3PA9pscMW0a2J2G15lMBR8/wAzVYnUVRFHNrzpPjMQ5pSNTQTubX33AgmWYr6dQWGpydKLsFB4mwy/Lgx8w2C2EzGY0UoVmbggHR6E7A++94F6XkraVDM3HNuCevxDczzHQpIBO2xtt95gchz8FAnRUZjfkkGbHDVw6q3KMN5i+k868cVxiDTqAlatIEMCOVO/3mCxIJJa978mel+MMnq021omumd2AFyomLOFBu+m6HkdVM1qUNFSzADk8DuZ6n4K8OtSVnqECpUAt/8AA/vKPw5haaOGCAHkEi5+J6Jga9MixB/OZvSkV3jnFnC4Wy/iqeQb9x5j9v1njztfeepeMHXFBaag2p7hubVDx/PWeYZmmlrA3tzGChnqExpcyO8V5pHM0becikCvLHAZdUqFSouCbA9L2/KV01ngXFKlUI4BWpwTwD2MjHpPhajUWmmsaaqCw1CxI7X6ianGnVTJHNjt1B7QPC2sFPT8J/YwzECyE9xuJlV5rjnOowIvC8zfzt7mVrPPPfrSRmkbvIneQO8ZEmd5wPBXedR4gTqig+qKSCqsmpm0jG0cWklnSxgA3jate8AQyQQw6nV4UmI2lfedLyS3wGZlXAJ2lxj7VEJ9JiXq2N5qsrxGtLTtzdgZujhdNT5m8yHLBUIZukzdeiUcsBNZ4NqM2q5m/wAS8/pBT2E818U4Wo9R3A2B2+P4J61UTmZnOsKum1ueZm3FHj9DFtSdr36Lb/54P6zfeBs81U/pMfMnfrML4kwhp1D2N/zgOWZi1Gorg8EX9RK+4vle24qseBujflKHEYBSxtbfnbnadyrNFqqBfn/2EYhtO/e/xON2Okkqjo4U038u4v3sRvxLqpXshAJ3B4NrX9YBySev7Q10sm/MvKrxVbngDpew7TFeIcFpcuo2Y7+829EecfMD8RYEaSbbbx569rrn083M7JcRTsTIhO7k7FaIR6peSKnQLcCXvhKlUXEqtt97qeohfh/L1qL5jzweoM0FHCfTrUH4ZWCuR17GGrHoWXuGQC1iNiIe7eWxgFEANfvzCMU9kJ7AwVYTxFo1ny73medpa5zjtTHaUb1Jx6+l1zIXMeXkZkkZMkWMtEWkjrxSO8UUa7xqNIHe87SaWIWDHq8g1RymWJLqjHeM1RjGSNqPLnIMQRteUjwrAvpIm+biazHo7qNCkk9pf+E8FUpAlxa/SHeHVp1Kana9hLsgDibtRa+8qs03Gwh7vK/Etf4mKY888VZUXKAcsTeYvMsvam5Wx26z17H4dXIJ5HEzuYYVDfWvzKdYbzrGZZmT07EHdbEfHM9EXFCrRRwebTzvNMB9NrpxNF4Xxo+n9O+41H2l1Nilyr/DKCwv7x+LxF9hxIcvY3LGJ0uSTx2nLG9NwqEtf7QzOkATSfxERlKoqeY9OBAsXiNZuT7RnpVjcwytrm0qWw5HSx6ibTEpcX7SqqYY1OR5jsD3HrOnPTneVHQwjPwJZ5flDOeLW7y8wmXLTAJG+3vLbDqF4sR3jelOTMqw4pgIRzsf2luuG1W7gj/EGIBII5Fpa4E+bf4hDV5hN1U+m8kzFwKbX7GRUHA27zma7029jNMPL8wqDUd+pla9SOxxIZvcwMvOdhE/UndcFUxxhiTfUnbwe8erSxJbxSPVFJBDErRRTST0mkg5iikjDzErX2iimUcyQjCIL7zsUYnpXhVLKCDsZfu9oopuqInYwHE8RRTNaivri4lZiaIYEGdimWlJWwgvuJSNS/p6hZf94t7RRTcHTVUao0D1AvB8RiiIopmmAnxLGN+qTFFMo/VfaKyqfX9IoopM77COwr9YopJa4Ehr+kJp1Stx6xRTcZWuX1ieZLnGJC029jFFGM15XjjdiYCRFFM1OgzpMUUE6ojiLCKKSRXiiiiH/9k=" />
        <Text className="legend">Tobinho</Text>
      </Box>
      <Box>
        <Image src="data:image/jpeg;base64,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" />
        <Text className="legend">Jotinha</Text>
      </Box>
      <Box>
        <Image src="data:image/jpeg;base64,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" />
        <Text className="legend">Stefano</Text>
      </Box>
    </Carousel>
  );
};

export default CardSlide;
