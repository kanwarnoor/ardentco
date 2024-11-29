import React, { useEffect } from "react";
import { useState } from "react";
import ScreenCard from "./ScreenCard";

export default function Enable() {
  const [nav, setNav] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (nav == 2) {
        setNav(0);
      } else {
        setNav((prev) => prev + 1);
      }
    }, 100000000);

    return () => clearInterval(interval);
  }, [nav]);

  return (
    <>
      <div className="w-screen h-screen z-10  grid grid-cols-2">
        {nav == 0 && (
          <>
            <ScreenCard
              css={"bg-ardent text-white"}
              heading1="Strategic Communications &"
              heading2="Public Relations"
              image="/publicRelations.jpg"
              position="top"
              link="/public-relations"
              buttonCss="text-white bg-ardent border-2 hover:bg-black hover:text-white hover:border-black border-white"
              blurData="data:image/webp;base64,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"
            />
            <ScreenCard
              css={"bg-ardentLighter text-black flex-col-reverse"}
              heading1="Public Policy &"
              heading2="Regulatory Affairs"
              image="/publicPolicy.jpg"
              position="top"
              link="/public-policy"
              blurData="data:image/webp;base64,UklGRm4tAABXRUJQVlA4WAoAAAAgAAAAEQEAqgAASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDhMfysAAC8RgSoADXUhov8B35IkWZIk2RbbH87//4yAMBOLeWZNW74yaNtGkHMEnj/YXx22bSNJVPpvePceBy3aduu20azYkkgQhPDiBaWk8/1/3yOEEEIIIYQQ2oSYEkLIhJjSlgmmhEY2JWSaKZmQjYRMTDRiIrRNyTQTIRvJprSJiUY2BTkoxgAptIVuJBvEIED3IoBmopmQ05Q2MRLapjS5m5HQTGnElEZopkSkIJ2W8DhzihhT4RQhqCGNJG6FtRTPpojoLXSWgJxkzwYxKM8hVwkIkSJwCyGEEEIIIYQQQgghhBBCCCGEEEIIIcR5w1bIfyZhLPuL+H/xzv+/iCz+q7uFxXLHdeM/6eIvK+4/seEfK0WCcJ7gV6mVXwSZerbjTn+WNSH5bD8qwdcvDmUXfnOwv6IwBxwC4S+o+5DOvA85ZHVXbzJaH39uH2jGSs8t/+5hb5Z6jx6Z2byrp2/BaeO+Ac3ew0/hd08wKX/56fYgbwkOEduSP9kXOfNFvzFRueHf+1Fkp5e2fcLv3YlvGXLDtPdPLlBKpQO+epQVGdmc4SHGazQiIx+n0OGrUX660SMoShelU7vrD3a/kgjt8+p4Ei39mG30skoxFi+tlzYOtcBjf4keCsY4q3jL2gO9ryNHlDbOW/jCaleUR/uvqo5rH5Ks2LdD0m9pVafNVvG4lvvSfCJnVV9e+JYprhuusHrsVO/ZqFF7z3Qveld7zUP1KVFaJAp2hnAZqrRU4q6jVqyvzfo0yOA+YYYoWSZQG+4zpjl67Y4deREZoV02Oo5HgP4SxJd6lGe7g9Aqx02Lx//VArdp4k1NcH9aJvrhADVDZ05tJRpSTEUQKWiV0nNgEe4zEQ1ne9H42udtOMx1Zrg+1cL15QK8gT5o/bA0rBZflhQvWC9eSMwzUlYchm/JfCi/4gI3cLe+gMMrUOBcUDulMIILNIz7rbTWGBTMnN2BKLunJb82ANNARBjRoMCFsRFFjd55Ck+XSblTj6IqaJdkhkaJ7Ybb8JKhfVK5iu54iCOeLc5K28dPXzPM5SNXJnduRURupMCeUUQFYBqi70PeKLOOk1jMKJkycmWKYq3h4he7GXWv6549Bsht7xibd3SmTkh/yBMDQQltF8rhrva0E/wkiVdAlkkAeGpxXwmvxvNzr8J1r9fHzlJuAneFpnMb1lGdwkBQOyhsJvs31m5ous2ngeNSgAQ8RFrZIgEFsZ0qWqD7SoHhCzNzlSnPlaAe/xymKcdfV8TJreGI8+xP54tJjlkoqPJsskNC2Ss0fR1AVdqnkHvjaEeTtnLfRCZ8J6cypiw6YQSJpqNAbcdM62iVVyISTywg+cGs9vsTMrR1s9C2D7iJUawpmkNRjX/cgJN7dV9pjgprOysG2jTxwFgwaj7Q4o/ETt6lV3sVmmRxoNUI/NUBGt1tbVmVpozVoJUeMXkZ88BiUC6docKyWjkC2k96g2V5rCoTqrK6DTYOt6WvVyJ7n+dgyxMm7pJGcc5qZiF6WdN8X70mvELlqrCPTuo9lXb8iO6BDq5q0QZsFXfEis1LiB7znMPFQRsRqsP8GAOot/tYnGiVSk9mAPdFkueo0ycPES62TElx1E7kk8tGFGfNe404YjQahJteK81qrD4mqMZ02JOQYq3whO1IyEJO5Wc7InKUiu1XRD0Y7uR0xO2m7EiWRBY+GMHjavc6XtaByxsjQkPaJOZxOwo6XwGiZd0G6/Bi+wJ5EI4U5zFZw8BD+wdc7Hsw2inTkAohhiZrFOlehtgZNEJWiXy1HqPUlgzxIqaLyhf7eKbsyTgh+ZYok33S6xStE6O5xYZhMsO9cEsmxvIxvKGGkELtIEfSgoKGKSoKLlkhZmPChqp4GnRhzHP44eGGwwgxecHA6PAEQ791j0bwFaRvfDTJIMhkI19CKOcoD201QmEboHQmKBVqTsamiTZXkdZRSUnYchwh3wbyMSiR4TyONOAYbU4IWyaDzHPxtmGSetqzOmNz5UsKP5jW2gdsn8Gr+nZCBPB7QZVm+hK1jo89kh/6sIZRGlDo7bgEHedEiHL3Dnt56ykW5prG23jEkZHEug6kRIKLcSbRv+8qqc93zwyYfcJSwnRwUwxIBJHZUT+8lKDtjmZ8Kb0GxySvvaMtSi4XpCUp4QscquhEozZNGpBrrDBkd0wJ98lyV9DQ7mjsjANRMLYqxTENvM9WhqZhVZBR3RYCnwiFMeBb68feoTM58xRiVHNQc7uqeNYiFVKmbnEs8TAStzSTwe8ATU64NjWnTmR4k9tneLY7r7yEJNERglQ20tZpOYcNRI87tng5mYEQVzVv8m5IYhpItWqLJKtdtHS+9xGmg3F6rnzMBmvbpodYWYqxncqikd3frZrqHnkF3eGllbcum1RQq73AQdpV+RNkWO7rgGQXnIqnjd9CayAU/q8HOt56GdQ80QDcmRO8dLe5Cx4aBMBaXOz9yS000x2QsOcnxkwtAhlMmwEw44TzTrjW15CXLvhXTAKs6FbYpOQZlW2e/SFgsb3I3ssIhgLO4I89JWdNKtuZktp79/+YLlPQB5nDreSIhXwWL631LNFYcsmw/b9JoT+xkQ3AIPan8ZUUu5BqshOS/uDbSrR63xj0ECq901J40jYOQYR4s4XNjlSIkC4nrTNoKOKwymQi54EPROBRdrt1JgCjkTYxxPn8yAO15j7+yBQaoU0MyUkWIFGddX1UUHMRTz5hiw/CuT+2C/nhDugdmunCDrpnfMJ3l+AlwrCmt0O+KD0gIOqtdAVjUYI785VVtL1dRCM4KxgEj4yqUVpiTQs2jO7jdrUf4ZngjOc0flTUXggBDsbogptiSrgxY5SfYzieErmnK6mmAD+rDsqV3jMPExUhczItbJIbAQYEPKSIFyrEHb1eMjaBlpnCFywf2BAeGW+Kd2FgEll0P9JMaZKfrXoMjHKdqGpg1I61DwLEXUHsrlD4cm2LD9gWVe5Gy+xqsB+Z5dZX/aBKv9PWGVYQAQ3ZrrsnQ2wtPGxHZfw1PKyFbW/u5Ulb3U9j5QldNWqH/8QNtb0joagskyBuEbbMZJwJa952xRmRseCqEcecGgAxTyWR5dHkyycOjTViok2IVA1YSrKJF05RjR8fcpD1gwkb4kYMJIGoHjrddas9kpo2Fmp5XhY2ruiW7tfHNt7gL9GihRMJHSfOZPbAcOsoxUxF6ES2MCAlQxw46a2j1/5LJpEQLYjGiBnXzge36hIDnptMr5lulWGzZA8iri4JjSacXwlft7uTJze5Fxi687gHcNpYqgGBJTjoX2jJ4IQFU0kXCR4krWvYOjAeOmeaitJ1bM6UGIaiFyDDGaNap/iKXigeZomEYB++DuZ8wKI+5LET8KYdtwiTfSSA5A2dxD41BXqPosrp54XFmaxilF78Lmfs+Zy3LnPyIgxep/I1GtA9bCF1MU29HZ+daMCNMy00iKqP+NRUdIJ/dB3KuGsGpCVz7VrYD+E1SfCAVnujoNJmRMhWDFluhEFTU29tpTxKsJpv1bOrXRHJKsnf4Ql5jqnu+X4iqQxoZwI+5L1uAf3GlIEbf0JjV91e6LGgRanWd+WzRCfC0fpPCK67YkZjBMwZx+XH+A8s/AFVbD8hL0fDvo8A9W9RVVGKNY9tye1cpaPVDlxPx2JhXfGeKhUB5zx4w/+S5d8HjV7mxaIOkmqI8jfXuFbMbMud06Cq3ExWV/HGmoa8YSFEb3hMxDUELKPu5R4h60O24HFRcbGz4lNo+zqBy1nEMXbygpcReaVDJ+l21tI5jjIE8p3FmctONuckwMY8RB8Hk5wkSe2S9MvgoxHq5DTryT3YnHoIBFhIcOU0vLriTB5nnGSWODQcHOSarPDHFoQJcq3pObSdbVpU4RV4XM8OF3RkrJaZrFae907HMGR+WRm4XMad+UF5ENv5K36oOQdv3KJysDeyqoz7EScXLKQLhrc2KzWcENpD1Q0b6Bhg7693efIxUjBbS92zbWLAdZxxlDwOTlQ/vTSJzOQVTOHb01CvHZjPpu1kbn2zXoiuy2mvEOUmXkVp0+QQEtCPXgevLIjS1RhWqnhZfK2cMXkaOo/GRxWRjl6UEHylqRCztghjmd6pw5adbA1IcmhGK+bEpGVDsWzwvkzzp2O9DOoFjRJR+dmC6FTFyKXTWshChvTIFy/f1cxGobEnb4O9oYfNB3bYhQ6fTFm1izdrKkwDL13AQ1d94Vkd9EdeePUj/hnlycEBDqdqZNJCJDAn7FJpdh6MKQblRUf10IOOaeN39MWkyda401ZAknXfbstslY7fviIEwmMqDVn2EqPIutBa0lXxzNoN1TJus56BOMGHjtCcQCBei+kY3PRwVFYTtAZpe6q0DpFESxN3IQ2qbe7PXC/ANRYCl6Nupk7jaozASIDKCson40KPh2leXmuIl5YMbZRk4Kzy9gp0aBOyKWt/OyrEKoWHrNysc/VFnAUA8buI8FA+/Xk7EMLpw8rIxZIkPcrJPX6wI6g1KfG58JALc2Xxl9ZVULwJIq6Kj71Jwp4DDK7yK54XD10cuNhzYSvy16+VB3IEufgrS29iM8pHkOaT0A2xNs2kiLUBKDYNfDEgqLOVpsI4NHZZGKn7MqaRMmROKsOUXtuS2lfl4CTZs6J+J9LwcZZFdj/YVonJ9f2GyglN8LWUdFYCovOJ6rF3x6LjbKaJMR9vfwdCMVHQCKv9TXyCw8ZA642w0ahdNYFI2HMXmpQCHgufdAECnoO2bT2g0G5/Af9oNLJ9xJxKSlsqzYnQAAzl/GYMUj/RKufCZKebDdbzNeWzEUSv/zW7Om1ceTfTqR0YsP1UN+NE2xTCCxkXLomFLYrP9Y2Xg22SrQ0E7HdHjMZrQUN0UKAgmZHjMTpiJJF3xa2tK6lAJYwKWuQ5lEfqs6Cq7HtpP6+qkK8VXIKEUcFlrmxtFNrwwEFtkig7HmBXiDcKNE2lLoGiqjnKj7Mla3l3BjxW4YeX7kRpMEbMLEnvMJqpKEPWglonouSMjzOaklOwE1OhJUefZNTE3GsEWtGF+c4nrATOFaMj84h2ybclql27kgYeyUO+rvXy6CE4jA6y7kXraZQFA0TPpjqam4YA+UCJdtYKT5eiBwKKP2PNrP5JvFcDStJoIyXZyFw+uCX+OGmuq573wS3DFaJZHel7TGzXvFH1xdeyFQR6ffuzOLYQjGggZj9ZdAbAhuOkCu8wQT4GGtwETncsiJx8vT+xDPh0lJLT5MBHtllRJaCX0VFB8GwYYBmNmGKhiamyqhZghmpYhp9dcJfL3Vxg8tSJDcv/2dg2A8E1vHM8MmrfzYrfkDnHZNok+Di8BvAQhcMBhRBxLB6Yxgsnm0+DIeZ4ZPkELozE+E30o3GimdK4yQrjfS5i5tCJRpvJiH6SQAARg89W+xeTFye9VAzRiQAwenP2FaMkoE9eYzP8N2S4Swg6g5c1cMaNn5w4KSX9jmTaWHo7wfPHIVzFQ+l6g5Ie2AA5y3ykjtciz2ubEktX1xE/mLCaOeeyZ/M2JVlswZ3OoGdo5aip6Kfmd+qOoXgt5S8ssrYfBOjjInDk7fv9w8KJWAqTPAAA7DmLDy8olMsDHSYJ7XYLCnByxRd1XT5IpOzLdwgwdYTxXoMooaGNqNDNlckWMLvu4LRHJ2BRO8zlkHd5WeTvBABC8dx7sYt7h8cFkyP5bVfHJsTxfjMi1IrHZVYaqxNbEWsTpHAHWdI0cvuoLy9ACO4gO6dM8rbmAwiY4BjSvrd14XxNMhyzOGvtmLyycpWXGB6s4zUPFUS2e0l8lE9BAgf5UUfDMHWJ1Y6qj6eyrw31/rVQ6SRxNMBudjzriUgo6Nmp2Dbxihe1T71dEg5VgQn3O+rKXBoE0KNLhnNYZXKNJqQTI0S7ZF4NiStOtISNs/xqeAHkze/vjLhMHZUicRH034ZxijpBsO22lnxxSBqxn4rgRs4mK8GiYcDu2wUx2w85OOrb7M7LERl3KltZOkUVKrwuu+xisYkEZ6OEjlxlBtCkRT2VVJ8ImQ6DwHJq2IUtqR1ykOxm9VZEQKspHLs0oL95/yrZGaZiGN7Shcu9L3M0VZcjMvYKDUopFFXJywBDYQw+yeSHTWrrqhgCR8c22q7O0ZsMdNYUFYK0K0Oe9kSOcMCTH+ey1I02SdNbK/ugtVrusbspRR1rg2M5/N4f+OAdOKY00DK7gR98+wLddOHNElwQvUVVAyZNw27vL6WmAuPwcS5LJke1mYCMomkSu98FgpYTOxtCa5tYhjpFesfIEWnDQWQySBEZxJBpoheooBR/jKwJEmHrvUxCR2XZo0e3PzYislQRYbn/8hsOu7GGiwC+avWARIbDk+AQhaYvsXSTcXTN5ESFa7sZwiObIVQ+OoIUgawtnNBmQTCStAHXNn6AOJ6aTXFwus2by278ME9bX78OdzyeNGuzRkuWzEga5DTmrX2ZJEa6yCrA3y4WalhoNITbzpCTzePxwQU0qZkLL0eGWMA/cEmE5ACrxPeOxa6C8SVuEcjR/ib4bvNykZqq+j0FrrSlxeVlPFLSRIxVdw1fzdsuP3TkZcCMvTV6YsP8Xksl9+5Nnj8h4QUkz8jlRRr8MBAzOG/AW4IHR2mE+mIWLmJwSZJoS4S103XnMPwSt53d0RnkA3fUcSazF3ovAleJFGs9FhODKQCXajgS/M8dITo4Ffg5FywWBpXoMfaGQH6G/yY2qbWRxpGCEzNGo9h9B0wJqiSzgw8H1EIPbpxJZ6IZHLc9m030C4lOstn2JGzXS3NcAOmranEfFjTdpoty8Cpt6V4HAOkoLKvD5nndqbVLMtxWt8fxmDIZ7lraACRfhzlflNy8iEDJwnhI5IUslXfgYTMMn7MT4y9uyO2Y63BSHcqj29RF4mxmX8+obHruHHALbSivJA36vE8VrIEtvH00EtUbExYzclot89SUF5CJT8LJaIEjEGeQz+CEzHCmOUR6rR5q5y4DcsEaIis9vFGcF7jK4nR13lBoVpY75KrhckU/W1pTZZaRtkHbZEDrkEQ2K7lAZ0o2CN3C8yRfQWIAzaARtS2n5WRWZ7n+hWYmT1gbDUGdsMD5lT1Pc4AUs5KuLl4w5csF75cjc4EIRcl0DDkv7ItH5+QeX+44azLSFme0K2Yfs/JWgpNOukKbE7c5Z4nJMMxKKbscebW3FH/UEppEy8zin0hBC6y/nmdsOYBh8X4Zb4dD+j6G3R2HTFfjSyJvhMnrWZhxKg+XdrX3EFxga4LHVXc6o2rY5Og83HEjkNkdM0C8KW1D8lnWO80gMEPWPXDQNuLRCStAKAKM0gdMmLSlsZJCoZvTFreqXk4r0CLpYy4zOKAfEbZAUTueGd7eWN2wycsFX5NZkNjdmgBEhGhB5r04KaeAgVAUzqpd7xWAxTfccXftkKbsheG5qT2hOdKtOO1qWK0QflgOx9Grmd0DV8jjofSBIHk6pi2svu/X61RQ6jMIQo+l7j0BBCmUOMs7/RSk2UfgMsALIMJSWrNsHmd3dh5yoXEW9z2EikWV91m8fRAYoFsRj5p4qMw0DElUhX7ijHBF++rBCdXqLoDIcKGJhWdGmqmdqg5ebqAkzYyDdGfM0mbfxcF03JaZYldDQUnoQPdQrxuuCQAHuVgVaxquLVBQ+mzcme76m927ve2LFAqAh8UQJbd/4pBbQxTxtWdFX+QUcEfd7HnpSO2tG6cDp2Qy3aawGOhMNGIkm8pmZoxIes0Mu6fTrAgh1XEmOVZlAsRYxiMaEpZ/IbxPUFh9Fbz0xRsht/rfX/TYSSiXS/Tu1o0M1h/AXCcMdfNP1Q44nnlrqBmyq12pyhkqqh1ErWrkJPYC4nkd9CRR/N5TcMUsmW5TO5w94KFxzIFd8LLpa2nTVnuZb9flSuZ4t9pUEWCgIB3QhIFdVET1fBvhDRL2iph7lKFrVhhkaQs6bIYkxip/EptvnMwC1HrmjLXj4Yf2wjipzmQIJ92mhvXuSDYzzCxKyiSzZKOELbZ6o/lRGmaFSmcENdkni9pLW1FeI36rqDpB4fnyD+xhMn49m04doPO969rN/AEr81HI3kLNcw1xljGxpeH+bsBQn7qjBUjOOsfTC7GuBRIhW81sCCeYZyDArIlmSug2NYv+CHo01LRRkEnhjlna0IBHV9mkO9FgIHLlar7Doy0Lw5nLqOwuEHRkluY4HJt87//dDY7bZuN1DduWLLi9tgUIOm0leIEJz45446BbngUV91mTQVs4ySbhNDPMiERvfDLjRzNY7UezhP0xfbPsk1ZONSS5L2mjwix3VPlm9zpscrncapd6SBPcHH5017RWyu73jsEvBnjpZuPb72z0BnCESNymAWxQRQD/gNj8s1I7bYHZMHN2lDd6BTsQc6X2YZYvDsL4ZMbH6WdEdJ++fJO8+cQnic6K0i5zLW3Rrzk5GUWKVu5VRlQuI7+4OMHA3Xwc7ifxr1/QN0VM+RA+3pW6idkuM1C0GFH40aExjwsp51kiOe3untuyqA8J4TQljdsy7gYf5K1ZmqmqHMLDnlK8l44UJ1Cx/n/gdIy1DFeFWN542QVGuoFPfqPn7WnI+3/pOBhsR/aoUsNoE9mtS1ziAZEBTmK0UOF+IQC1eReCDwQw08ygEwigG1jP5H2erPPx66CgWbJZsplZ0Xt/Y9DBIzrZ09z/Sft71+WrleX/8I8P6TBILzl++5sYTBAFotkQUbAXk0ZMw527tOPUR14FIUbl5ZLOUp2jFhbCRjOJ0ElS+MTfeJuFzxBHOqN9H+o6KY64igXuvj/uej39q3+h6RdBCRhaAKOeSm8mz6Dk8ABmTDUJZnZ7TicaVhHZsmvmvsDStSs907huk1mTWflTY3BUbVMzs7TlWxt+ZiVfzXWfAQll0te+v9J1nf7S+P4XY3411u+MsguREsHz4MnqVoAmDjBOlLmYuk5TDWGA7OArtjwggyTqHZ80Pug2eBSas86Hg26WKugnGfw6R8qy9jn2peUv6PT19E8a/9w6PzNKrhJ8fKCDJ/CbxDOVbrtJBXlSNuR0Nylxiq3dRcypFEYy3eK+ug0zwUCzoH5EaJo3aeV71sysmVmTWT7bVe0+RwkFA7y1/H3St9P/sJFryCFcFticmC5Y0NFZU2mynu0z+Ch8lADVGcSsiTDsBSa4tqhQKDXq8VyopBYV4g/1zWhmadNvopnSjHweTsGD2eL+4ew/8q2/evrnF71KxhXLOH4AFTF0E641o3ywCNEs4bUtpRSqqWT3YJ3MlhUPy7qhKjDxJHPBI2eGmd3mzt6ebiNt4KtTJ/Z+BOnPLX896H45/QvD/6x5S7ijw61XRzWmtmJHEFAcEleBh5bG2SlA2brH02cAnkFnkM2k3B7tdyygbS6U60xb+S/n/+nZH2Tt//L0AM6n4NyEgK/yfQFjQ3Qg04NJJuHRiKcYuMbC4Cxr29BP3mMnzBOiOaBxIj+C9Pg2/z9o+d/8441os2c0jSvbKiTODjwnMpOcL/cUVUlbvVOlG9w0uwvhoW3QlqNuOcQn9c/NofcqEN4Y+z9/9ueM7qE7AUMX0mT/OXTL0B1Uf9494Wtu2WXKhGsBoADdpswvQJmIOEdNNht0SzdGg35q9FlnLzX3jRKjGXYbHXKc4RDwctRvKJDqKtl7JwBKtgW2sKyJSDhLtyg+x1lz8q5GJrGTOmNR+V9z9gfVQ1cQYZbu7hAjb0YYNaesAnEmCSh06Q2UHAmyIGLThZPM1BYfXiYNB5RSmotfj73PPqYZ+KceNac1e2TZjMk7gYtWUPxwKzPEoIoBNniZtNYoqRuDHdyE40jbZNYg8wGjYKMh2j8n+a6z2vE+TII5PQFk2O5CzGj0BhaIdxJejDjg/EFTwI5sZkZnm5nGZ5z2/NZ28/2BR/77pIsbO/g5DGjirfDEZPDMV5t10bmfZCCT989QPHY8VZ8NGAzXbdCZTE0EPq8nP7R+DKMuudcmGRBJDJuPx83I4rOwb7dvNXFW7lSRGVb7rPHO+B6fCJ2p4bNkU/j+hb7Pvuvr2vEKRabBw6loHXs02aByJQE4xAt3YFtGDNmydsYOn0zgPAdg7Ep7W/r7p963zwcxqs6ovUZGAuxkco8mqT07VN6SwcX6qTvyAgtDdITdBZ1hpNugbZg1maVtottktEFa33/S+mUXR+nNWWSFhjRgRgbef3AlwYspbSPEqMB7CZFgRrfUUpg1VeQwkonj8yv/j/sPWQsWKLich0XYn0EN5XTFy33KXt2OUaSt7ONjO8LbcTxmVesgrRF/3PpZjI5pOVRTU2Vnt5j5MuGpYbeGPykU8n5aNrw9LBMM2uKP+/mjEf9Ln//0HwdIyX0xTMWwyd3bRzu8CvCsadyTySuzfPQ+6CwAsjPmjaZ0LgbCWxtT5P0nI349+6B6KljoKCAAmiNATbWw2U9Ecrlz5EQ3MZJpRjIdqB/Fpf003HWbTOCN9+ePyb4OB9VOhI9Z//mUxi+vYIsqRUOd5G2ENLI7L5onk+s29cKbswX//NL29t+3YeVmxboqRwIk3dC07+LjxJt22OLcpSw/ftzDZyF+kFbqf+H249r2lV/vx93g5oM8F97YfUi6wm9v5G1OGWmSyPk72DqT0RWkfzrRr/990i7ES2onHNJsFYGvsA08FpNhm+skzHQcxTHLSDcY4KefL+Dxn/5DNNjHPA6BzIGJqa0wBPgwv2ODZrcFCeUtJs3u+5Pfzvbygyr7734+aO8O5LAJgjf7M3vAoCo2AZCzwxk4FHiUQQjdylvva9ty+PTPPQanU5ogIb840oksncaLS36f4Gv5/fIVDn//81n7uxM3XKcvBzYEIAYk4mB4WD6Zq1jw4v7z+dc2H1u8VGtOXw7Z9M6vaolhiof8lk/2xP35Zcp/RC9OTd4sMACku415HVJa8a0T6z+x3R1Ni2Vh8tPnay9Ce3rpBiQa8ffIj1PsP2DPW9OfM5O3wiGI7F9A8SZFPKvP0Eq6tw+DFGnraAz5T7r/8eRLQaL1S9vsywi83K7+ZEvi/mQi+mI8uxrD5LOJ3v0HjBYf0leh8Z8+3puiq1UmLwE22nnou/jdAF9aPRAEnbG7uQofDPVCtmgg2FmTAc52kaQmOpikq1rNjEP/147/j9/wQNkg6w/Te8wUaTg+yf2StpM4un65CyGEEEJ8eke0jGoK5J2PQ0st+yq/L4VjgcISMYefYND3f/al3qx3+X1tisBEhsckOULZilHym1f3ya+J8evPMLZdUq2t4j/zlnHzshz7kjJEyd5vnVjXf3Ty+S0HfX4/qsaOZOaEq0OcefHhSTW9EPwjgrT8zWm7pVDgg5ajDNA/nIB0rxH5w+KQro+n76EVn5mgxlqIkFafkqHKLz/iy9e1P0q63YUs1ezmdZDaAEUPk2hUL++rHi+v/gP+4y9O5eQ6Vy0K4i+Z5c92TalkdsTzKyfoqt+w+jmLP9vUs33z5evfx1E4dH8xtaIztAqmiQQqGCBCWYptjEn6bJVe2j++v5vw+DVd2f7qejBQU6m0QbnM4hi6s1Cgx0aK8tiUUFayuO1jU+LZJs3n2aa+n9dL2sEfUmrW+aff+rCzhN9jI0VoHiaazKLSpijiMUWoErpx52cmUs7+LSRKs33YEhti5DSq3dAMrUomNIpK5oms/uT2WEgl20tIgH83b89+HPLRgXtMSC0+bFXJRpV4bIo0yVeIUPGgCM1jU0oGJX4fIMFjE0OAs+cfwuIANg+7zVCNPDUt2Hq4HTLKF4qi0vbYlLbFRJBAJXuYqJR/TY/ytrFpAjY+JqbC+7FR2D42JVMem6BJ9diUXtoeU8STQfXYVIRRlLireLZJvv8NbFV88xxGaQKsaMhL8UOvelnX0iSeNhLKY1OK0IsHvbSptD0oKj2ax1QyKd//ALb9dx2mMvTYzXzY2IsAXtcTo49NgU4lEw+TOlfJHlPEw0SvHPRonjZ6bKTo0fa04bHht8aPvtg/3UZST7NyAD8jQaketE0lu4+EShbcrOQnNtGjkT1M9Dw2pXpMrxwV1dNGj2XBi6tu4z+g+ei3lwYMySDDztGNQnpMTGUmJf4YBqr4okqm12NTQUU+ZNl72vC04THlMeWxTz+8/drl4aR+UrYyILVrkr+LvTv3EUCAoEFhaGSPRQK9csjxaSNZwNLTRnoCIP8RyNAdTb8bUBTgmcyhekYWwsRo/DUw4DF4quxhoqT5PD4ZVMqDngc9j0099u2Hx3o3IqQa/5kHkgcUPiYmAcoeHMIdzOsp0Dw2UR70aHjcBhyfDDuNs7u/83OR78/nfnU/SDMNKgJvVgYB5Nc2VI9prPoUEmGc5sjwsLVFJIgBHhvhKJLb02SqlKKxypc3wwJ2VMyYeZYhnqB5WQtkToBCkIeJkHCa7E5oKFb9dfQBVfn9zYavxco3RvRz1NCrQGCGadQ2pahQaqb4vjoXA+DH9UMmmDxtEPHGbQoASJOiB9/B4t/bfD0liqd6m+ZgvqVEOlRofCzh+9iULINTW6akSqWpynI3pedh8jDRS8Es+dajUfa37/n79/l+bPSxFy//ZnkKhn2c2Myzyi8AyP6EZ8j6H5dkp+zZpmRH3R22+P3R/U30/I6TtqnH9PD7mMlPGb704moj/UhI3qzafV8SoFFaJtis2YITnYOS42MToZkIbWa3e1cBhKrH9Hpsag/EhztPUx0z7cmX7ngfaBl/VCVtIQ9BGg2EUoEDG8o0QQJ+OxLHIZl+bRIYvWteqgjlMWXDNt9PhszzktyTybbhIy/8xzL7mSoWOzRopiQSuNxOh0Y8NrUB7RwfWKM8NiUlSB8mqggRNmCJmqpQUDi9fWv04LnTZ17kuU9xzWMAIVPssl7wwjCNeQvB6s9ITUZu4AIIcTCGPTZk6OSxiSpoqFBQ7fMpirf78OANrL+Q0XWdTQmzRSGReXf7trdpsoe30XuMVAUYPUzgp0GIuZhgj/NhYuxjxhWghEL8Fh938sOf/sxuP3FAMTjAobdjsLuJQjMjk+AtR1J7HaNtK90rYHY+wz57egc54VGqz488UdXOLl65SM7dazK4hnh7BrubkuwFCO0mp2fBnMs/w4Ty2PAwkRyW2fi96qrzO3m+2HwjIEqeQqXZo/NYEXsPqmJ0nAYIxVsVTR4DoOlhQB2+6s8xKAAtVzHRVrmm+7DmV0d9TJMGqZFQiPNIAHX3daoQEj4zUckk5WEi7dAU54OiSI9Nnm3yMDxMni0tz1ZE9xDlu6a7HoTUryWELesHICHXmfsInsSDqGsnrTxRVcokz0yy0/nYRPNsU8ozk4eJeJg8M8GjknRWC5R+D3H4fl1uPx4l9qt/7gji2QyexrxQjLJqW3jN6uHZsnE1CV+wU/G5yJQsRnq2SebolldAdP+XJ/maD7vgbO7gYkdab15nt8rbeOtyGA2PtBB5hJYH0uH7bBM8a1S84MUCikAmy6fwoaV6AUPHWTV+GR46Hjvvy8Zp3GaCw2QrIMK07LMArvbJ9D6kwgx5Fj3ZZn08KkAmi779qL5aYpjOZGuAl7M0flbz1DXtllgsvf0uRpikz3BpnwPgwXzy+O7wQgblIY9i8/oCWEphpFLEM2aIw+CW7UpLsjuC8+Ws5dB8VXPY7ZvjhZn5zsbRvJve5IXnAMBBkGFI9QB2YSkpIAgLQCGE/Nqk2q7DeVYNpvowJPTMNgAzZ4U3XnYzNqc0eTGFzc92QMNYCtXDbtplezuHEOBhUthkshC+Hl7PerKPIXmbBsSFl/P6265cLgmg+TQrmvDaFjbnSZEkU8kkIT02lfANgd93WlKzMRAybsQhntpPSLabpBfdB7F4fRqavVwW3vY8ouU8B8heldRjJDwiyWImMDCmebZJUOUgFGWbTRo0CQkUDQYl8yVsfz3m54v2d4/37K1x9nQ5lXLB0MdPV2M3JviQ50mBYLMSywQkqZ5toiiSokiyzfQRC/AwImRoNb4d8fNNiGj3q04Sb825gkBrSJKxonM2xX8Diap4QMBnwQuFobJTP8Bhz3h02S690uP4w883kTQwXECTxotEnCRJTRYHlrI8VTyYDyn83mRM5f8Fsrx/akZHF4de3y8/GPA9JHgoUu9K4hUv/BQJgnj9qUiCord8sAgJS0lRCUkGYBRLaYuQzzYJy6xtIOMulYcel+99NM5XgWU+HiZlCoS8LEt0iAxvgeB0zxZ8s3AgJKkz8++0hISxibdeeMWumuO4vPq+5uv6E+8vjK9hCd2jv14mNVZOLY60xtye9sxTJOvHpo1lErfQfrigszcl3i4jXE3wJbuZqZwaB9TqXqw8DAuYwWEFNhTGXG98g707if+oUbXvgOzMwGoYZ8bdGrGPwETfa+NHBCnny9/MvX9E1dSg8VMRyhP1Zx2zXLkmUKL3obhaGA0P1oZTTIUR9O1Sfpvznf57Oq4XRuuHVvKTYj5jhS6hfgi0ornkzj/xZH/DeISnxfOw00krSqFkF1N+mbs6fvvA7b8HC0WLQEIAQtVbac3hHD3HI9MGA0CSCJLrszPC+X1Jb+WtbiMbCGyUt7edDgN814GPyFrDpS6nMuAgZKxwlOEf/wKX1NQtZUKdjHbr/DApaIuAjncOvvl+2SG/flGeyFqLLpT/FZZLTcz2HZfBQLZPXPYoSJgJN4kf17BjQvs1eZ4naPm6R/N82YS7tkhqrJ8mR29l+TLh1XSY63XduNbIPvLkpflDsPJuFt0H6v3YQUK0IXL7NPGLf6oJC3lZimyAeiLwQWCqkv1ywDdn7OPXIOWj4Yg6o6HLXoe23oPb3mpVHwwpYhVTL1IfpvxQqvgi9mleNm1+2sdp1f4WYJnmb/0y6f94yvqv9HIt639BZRuRlu4HFJ5fVnjhi8D9QLsIAA=="
              buttonCss="text-black bg-ardentLighter border-2 hover:bg-black hover:text-white border-black"
            />
          </>
        )}

        {nav == 1 && (
          <>
            <ScreenCard
              css={"bg-ardent text-white"}
              heading1="Strategic Communications &"
              heading2="Public Relations"
              image="/publicRelations.jpg"
              position="top"
              link="/public-relations"
              buttonCss="text-white bg-ardent border-2 hover:bg-black hover:text-white hover:border-black border-white"
            />
            <ScreenCard
              css={"bg-ardentLighter text-black flex-col-reverse"}
              heading1="Public Policy &"
              heading2="Regulatory Affairs"
              image="/publicPolicy.jpg"
              position="top"
              link="/public-policy"
              buttonCss="text-black bg-ardentLighter border-2 hover:bg-black hover:text-white border-black"
            />
          </>
        )}

        {nav == 2 && (
          <>
            <ScreenCard
              css={"bg-ardent text-white"}
              heading1="Strategic Communications &"
              heading2="Public Relations"
              image="/publicRelations.jpg"
              position="top"
              link="/public-relations"
              buttonCss="text-white bg-ardent border-2 hover:bg-black hover:text-white hover:border-black border-white"
            />
            <ScreenCard
              css={"bg-ardentLighter text-black flex-col-reverse"}
              heading1="Public Policy &"
              heading2="Regulatory Affairs"
              image="/publicPolicy.jpg"
              position="top"
              link="/public-policy"
              buttonCss="text-black bg-ardentLighter border-2 hover:bg-black hover:text-white border-black"
            />
          </>
        )}
      </div>

      <div
        className="absolute h-screen w-fit z-10 justify-center items-center flex group cursor-pointer"
        onClick={() => setNav((prev) => prev - 1)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="white"
          className="size-10 m-auto rotate-180 ml-5 group-hover:scale-110 duration-100 group"
        >
          <path d="M5.055 7.06C3.805 6.347 2.25 7.25 2.25 8.69v8.122c0 1.44 1.555 2.343 2.805 1.628L12 14.471v2.34c0 1.44 1.555 2.343 2.805 1.628l7.108-4.061c1.26-.72 1.26-2.536 0-3.256l-7.108-4.061C13.555 6.346 12 7.249 12 8.689v2.34L5.055 7.061Z" />
        </svg>
      </div>
      <div
        className="absolute h-screen right-0 w-fit z-10 justify-center items-center flex group group cursor-pointer"
        onClick={() => setNav((prev) => prev + 1)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="black"
          className="size-10 m-auto mr-5 group-hover:scale-110 duration-100"
        >
          <path d="M5.055 7.06C3.805 6.347 2.25 7.25 2.25 8.69v8.122c0 1.44 1.555 2.343 2.805 1.628L12 14.471v2.34c0 1.44 1.555 2.343 2.805 1.628l7.108-4.061c1.26-.72 1.26-2.536 0-3.256l-7.108-4.061C13.555 6.346 12 7.249 12 8.689v2.34L5.055 7.061Z" />
        </svg>
      </div>
    </>
  );
}
