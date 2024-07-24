const a0_0x4f99bf = function () {
  let _0x57250e = true;
  return function (_0x38d4a2, _0x2b1119) {
    const _0x3bfdb3 = _0x57250e ? function () {
      if (_0x2b1119) {
        const _0x378c63 = _0x2b1119.apply(_0x38d4a2, arguments);
        _0x2b1119 = null;
        return _0x378c63;
      }
    } : function () {};
    _0x57250e = false;
    return _0x3bfdb3;
  };
}();
const a0_0x1f6092 = a0_0x4f99bf(this, function () {
  return a0_0x1f6092.toString().search("(((.+)+)+)+$").toString().constructor(a0_0x1f6092).search("(((.+)+)+)+$");
});
a0_0x1f6092();
const a0_0x3c8ad1 = function () {
  let _0x574969 = true;
  return function (_0x1eab4b, _0x445dc7) {
    const _0xf42302 = _0x574969 ? function () {
      if (_0x445dc7) {
        const _0x4d9268 = _0x445dc7.apply(_0x1eab4b, arguments);
        _0x445dc7 = null;
        return _0x4d9268;
      }
    } : function () {};
    _0x574969 = false;
    return _0xf42302;
  };
}();
(function () {
  a0_0x3c8ad1(this, function () {
    const _0x310d6a = new RegExp("function *\\( *\\)");
    const _0x2f6af8 = new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)", "i");
    const _0x346cd4 = a0_0x3f15b7("init");
    if (!_0x310d6a.test(_0x346cd4 + "chain") || !_0x2f6af8.test(_0x346cd4 + "input")) {
      _0x346cd4("0");
    } else {
      a0_0x3f15b7();
    }
  })();
})();
const a0_0x14832b = function () {
  let _0x8aa538 = true;
  return function (_0x20d63d, _0x3732f7) {
    const _0x484b53 = _0x8aa538 ? function () {
      if (_0x3732f7) {
        const _0x22d8d5 = _0x3732f7.apply(_0x20d63d, arguments);
        _0x3732f7 = null;
        return _0x22d8d5;
      }
    } : function () {};
    _0x8aa538 = false;
    return _0x484b53;
  };
}();
const a0_0x5dd363 = a0_0x14832b(this, function () {
  let _0x368f48;
  try {
    const _0x52df0a = Function("return (function() {}.constructor(\"return this\")( ));");
    _0x368f48 = _0x52df0a();
  } catch (_0x1b5104) {
    _0x368f48 = window;
  }
  const _0x4f6105 = _0x368f48.console = _0x368f48.console || {};
  const _0x37a8dc = ["log", "warn", "info", "error", "exception", "table", "trace"];
  for (let _0xb00ba4 = 0x0; _0xb00ba4 < _0x37a8dc.length; _0xb00ba4++) {
    const _0x209f74 = a0_0x14832b.constructor.prototype.bind(a0_0x14832b);
    const _0x5ec16 = _0x37a8dc[_0xb00ba4];
    const _0x4befce = _0x4f6105[_0x5ec16] || _0x209f74;
    _0x209f74.__proto__ = a0_0x14832b.bind(a0_0x14832b);
    _0x209f74.toString = _0x4befce.toString.bind(_0x4befce);
    _0x4f6105[_0x5ec16] = _0x209f74;
  }
});
a0_0x5dd363();
document.getElementById("MaineyranRoot").style.visibility = "hidden";
const root = document.getElementById("root");
const dropdownMenu = document.getElementById("dropdownMenu");
const dropdownButton = document.getElementById("dropdown-button");
const regionDropdown = document.getElementById("regionDropdown");
const submitButton = document.getElementById("submitButton");
const eyranRoot = document.getElementById("eyranRoot");
let playerRegion = '';
let itemIDorICOMjson = '';
let pngOfItemsList = [];
let isDropdown = true;
const regions = [{
  "code": "IND",
  "name": "India"
}, {
  "code": "BR",
  "name": "Brazil"
}, {
  "code": "SG",
  "name": "Singapore"
}, {
  "code": "RU",
  "name": "Russia"
}, {
  "code": "ID",
  "name": "Indonesia"
}, {
  "code": "TW",
  "name": "Taiwan"
}, {
  "code": "US",
  "name": "United States"
}, {
  "code": "VN",
  "name": "VietNam"
}, {
  "code": "TH",
  "name": "Thailand"
}, {
  "code": "ME",
  "name": "Middle East"
}, {
  "code": "PK",
  "name": "Pakistan"
}, {
  "code": "CIS",
  "name": "CIS"
}];
let lastOrientation = window.innerWidth > window.innerHeight ? "landscape" : "portrait";
function checkOrientation() {
  let _0x432ea2 = window.innerWidth > window.innerHeight ? "landscape" : "portrait";
  if (true && _0x432ea2 !== lastOrientation) {
    location.reload();
  }
  if (true && window.innerWidth > window.innerHeight) {
    document.body.innerHTML = "<h1 class='text-white font-mono'>This website is only accessible in portrait mode.</h1>";
  }
  lastOrientation = _0x432ea2;
}
window.onload = checkOrientation;
window.onresize = checkOrientation;
window.mobileCheck = function () {
  let _0x4e34d9 = false;
  (function (_0x213cd9) {
    if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(_0x213cd9) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(_0x213cd9.substr(0x0, 0x4))) {
      _0x4e34d9 = true;
    }
  })(navigator.userAgent || navigator.vendor || window.opera);
  return _0x4e34d9;
};
if (!window.mobileCheck()) {
  document.body.innerHTML = "<h1 class='text-white font-mono'>This website is only accessible in mobile phone.</h1>";
}
regions.forEach(_0x1cb3c3 => {
  const _0x5e0953 = document.createElement("div");
  _0x5e0953.className = "hover:bg-[#253146] transition-all duration-300 ease-out p-2.5";
  _0x5e0953.setAttribute("onclick", "selectRegion('" + _0x1cb3c3.code + "')");
  _0x5e0953.textContent = _0x1cb3c3.name;
  dropdownMenu.appendChild(_0x5e0953);
});
function toggleDropdown() {
  dropdownButton.style.borderRadius = isDropdown ? "0.5rem 0.5rem 0 0" : "0.5rem";
  dropdownMenu.style.opacity = isDropdown ? "1" : "0";
  isDropdown = !isDropdown;
  regionDropdown.classList.toggle("open");
}
function selectRegion(_0x2244c0) {
  playerRegion = _0x2244c0;
  dropdownButton.textContent = _0x2244c0;
  toggleDropdown();
}
function tohex(_0x3ad6ac) {
  let _0x3e279b = '';
  for (let _0x16ff9a = 0x0; _0x16ff9a < _0x3ad6ac.length; _0x16ff9a++) {
    let _0xcb8dfb = _0x3ad6ac.charCodeAt(_0x16ff9a).toString(0x10);
    _0x3e279b += ("00" + _0xcb8dfb).slice(-0x2);
  }
  return _0x3e279b;
}
function encrypt(_0x1c9f5b) {
  var _0x394395 = CryptoJS.enc.Utf8.parse("null".padEnd(0x20, "\0"));
  var _0x27fb6c = CryptoJS.enc.Utf8.parse("null".padEnd(0x10, "\0"));
  var _0x3cfcef = CryptoJS.AES.encrypt(_0x1c9f5b, _0x394395, {
    "iv": _0x27fb6c
  });
  return tohex(_0x3cfcef.toString());
}
function decryptBinaryData(_0x21aacb) {
  try {
    var _0xff86a6 = CryptoJS.enc.Utf8.parse("null".padEnd(0x10, "\0"));
    var _0x3fda0f = CryptoJS.AES.decrypt({
      "ciphertext": CryptoJS.lib.WordArray.create(_0x21aacb)
    }, CryptoJS.enc.Utf8.parse("null".padEnd(0x20, "\0")), {
      "iv": _0xff86a6,
      "mode": CryptoJS.mode.CBC,
      "padding": CryptoJS.pad.Pkcs7
    });
    return _0x3fda0f.toString(CryptoJS.enc.Utf8);
  } catch (_0x573d6e) {
    console.error("Decryption error:", _0x573d6e);
    return null;
  }
}
fetch("cdn.img").then(_0x51439d => {
  if (!_0x51439d.ok) {
    throw new Error("Network response was not ok");
  }
  return _0x51439d.arrayBuffer();
}).then(_0x3fca67 => {
  const _0x2a3469 = new Uint8Array(_0x3fca67);
  const _0x5a0242 = decryptBinaryData(_0x2a3469);
  if (_0x5a0242 !== null) {
    itemIDorICOMjson = JSON.parse(_0x5a0242);
  } else {
    console.error("Decryption failed.");
  }
});
function fromTimestamp(_0x1f85f0) {
  const _0x14bfe1 = new Date(_0x1f85f0 * 0x3e8);
  return localTimeString = _0x14bfe1.toLocaleString();
}
function removeAllChildren(_0x430fdc) {
  while (_0x430fdc.firstChild) {
    _0x430fdc.removeChild(_0x430fdc.firstChild);
  }
}
function createItem(_0x3c2b61, _0xc0225) {
  const _0x146c23 = document.createElement("p");
  _0x146c23.className = "font-mono font-thin text-slate-400 break-words";
  const _0x259d42 = document.createElement("span");
  _0x259d42.className = "font-bold text-slate-200";
  _0x259d42.textContent = _0x3c2b61;
  const _0x21bd05 = document.createTextNode(_0xc0225);
  _0x146c23.appendChild(_0x259d42);
  _0x146c23.appendChild(_0x21bd05);
  root.appendChild(_0x146c23);
}
function enableButton(_0x563adb) {
  _0x563adb.disabled = false;
  _0x563adb.style.pointerEvents = "auto";
  _0x563adb.textContent = "Submit";
  const _0x48371e = _0x563adb.querySelector(".loader");
  if (_0x48371e) {
    _0x48371e.remove();
  }
}
submitButton.addEventListener("click", function () {
  const _0x3be5dc = document.getElementById("playerUIDInput").value;
  if (_0x3be5dc === '' ? (alert("Enter UID!"), true) : playerRegion === '' ? (alert("Select Region!"), true) : false) {
    enableButton(submitButton);
    return;
  }
  submitButton.disabled = true;
  submitButton.style.pointerEvents = "none";
  submitButton.textContent = '';
  submitButton.innerHTML += "<div class=\"loader ease-linear rounded-full border-2 border-t-10 border-gray-200 h-5 w-5\"></div>";
  const _0x26ca65 = encrypt(JSON.stringify({
    "expire": Date.now(),
    "playerUID": parseInt(_0x3be5dc),
    "region": playerRegion
  }));
  const _0x48b8c9 = new XMLHttpRequest();
  _0x48b8c9.addEventListener("readystatechange", function () {
    if (this.readyState === this.DONE) {
      enableButton(submitButton);
      if (this.response !== "null") {
        removeAllChildren(root);
        var _0x48f2c7 = _0x48b8c9.response;
        const _0xef0a07 = new Uint8Array(_0x48f2c7);
        const _0x4c42ae = decryptBinaryData(_0xef0a07);
        recivedData = JSON.parse(_0x4c42ae);
        pngOfItemsList = [];
        if (recivedData && recivedData.basicInfo) {
          if (recivedData.basicInfo.nickname !== undefined) {
            createItem("Nickname: ", recivedData.basicInfo.nickname);
          }
          if (recivedData.basicInfo.level !== undefined && recivedData.basicInfo.exp !== undefined) {
            createItem("Level: ", recivedData.basicInfo.level + (" (" + recivedData.basicInfo.exp + ")"));
          }
          if (recivedData.basicInfo.liked !== undefined) {
            createItem("Likes: ", recivedData.basicInfo.liked);
          }
          if (recivedData.socialInfo && recivedData.socialInfo.signature !== undefined) {
            createItem("Signature: ", recivedData.socialInfo.signature);
          }
          if (recivedData.basicInfo.bannerId !== undefined) {
            createItem("banner ID: ", recivedData.basicInfo.bannerId);
            const _0x45f5af = recivedData.basicInfo.bannerId;
            const _0x50fd5f = itemIDorICOMjson.find(_0x40cd6d => _0x40cd6d[_0x45f5af])?.[_0x45f5af] ?? null;
            pngOfItemsList.push(_0x50fd5f);
          }
          if (recivedData.basicInfo.headPic !== undefined) {
            createItem("Avtar ID: ", recivedData.basicInfo.headPic);
            const _0xbb126f = recivedData.basicInfo.headPic;
            const _0x30f6c8 = itemIDorICOMjson.find(_0x2c3c8e => _0x2c3c8e[_0xbb126f])?.[_0xbb126f] ?? null;
            pngOfItemsList.push(_0x30f6c8);
          }
          if (recivedData.basicInfo.rank !== undefined && recivedData.basicInfo.rankingPoints !== undefined) {
            createItem("BR Rank: ", recivedData.basicInfo.rank + (" (" + recivedData.basicInfo.rankingPoints + ")"));
          }
          if (recivedData.basicInfo.csRank !== undefined && recivedData.basicInfo.csRankingPoints !== undefined) {
            createItem("CS Rank: ", recivedData.basicInfo.csRank + (" (" + recivedData.basicInfo.csRankingPoints + ")"));
          }
          if (recivedData.basicInfo.badgeCnt !== undefined && recivedData.basicInfo.badgeId !== undefined) {
            createItem("badge Cnt: ", recivedData.basicInfo.badgeCnt + (" (" + recivedData.basicInfo.badgeId + ")"));
          }
          if (recivedData.basicInfo.seasonId !== undefined) {
            createItem("Season ID: ", recivedData.basicInfo.seasonId);
          }
          if (recivedData.basicInfo.weaponSkinShows !== undefined) {
            createItem("Gun & Fist Skin ID: ", recivedData.basicInfo.weaponSkinShows);
            const _0x20246e = recivedData.basicInfo.weaponSkinShows;
            Object.keys(_0x20246e).forEach(_0x527537 => {
              const _0x490d0b = _0x20246e[_0x527537];
              const _0x8ab3bf = itemIDorICOMjson.find(_0x22b109 => _0x22b109[_0x490d0b])?.[_0x490d0b] ?? null;
              pngOfItemsList.push(_0x8ab3bf);
            });
          }
          if (recivedData.profileInfo && recivedData.profileInfo.equipedSkills !== undefined) {
            createItem("Dress ID: ", recivedData.profileInfo.equipedSkills);
            const _0x3fb454 = recivedData.profileInfo.equipedSkills;
            Object.keys(_0x3fb454).forEach(_0x165de5 => {
              const _0x2041a5 = _0x3fb454[_0x165de5];
              const _0x5a208f = itemIDorICOMjson.find(_0x9022f1 => _0x9022f1[_0x2041a5])?.[_0x2041a5] ?? null;
              pngOfItemsList.push(_0x5a208f);
            });
          }
          if (recivedData.profileInfo && recivedData.profileInfo.avatarId !== undefined) {
            createItem("Character ID: ", recivedData.profileInfo.avatarId);
          }
        }
        const _0x4066f7 = Math.floor(Date.now() / 0x3e8);
        if (recivedData && recivedData.basicInfo) {
          const _0x5f192a = recivedData.basicInfo.createAt * 0x3e8;
          const _0x38e5c1 = _0x4066f7 * 0x3e8;
          const _0x2bf2c5 = _0x38e5c1 - _0x5f192a;
          const _0x4a17d4 = _0x2bf2c5 / 31557600000;
          if (recivedData.basicInfo.lastLoginAt !== undefined) {
            createItem("Last Login At: ", fromTimestamp(recivedData.basicInfo.lastLoginAt));
          }
          if (recivedData.basicInfo.createAt !== undefined) {
            createItem("Account Create At: ", fromTimestamp(recivedData.basicInfo.createAt) + (" The account was created " + _0x4a17d4.toFixed(0x2) + " years ago."));
          }
        }
        if (recivedData && recivedData.clanBasicInfo) {
          if (recivedData.clanBasicInfo.clanId !== undefined) {
            createItem("Guild ID: ", recivedData.clanBasicInfo.clanId);
          }
          if (recivedData.clanBasicInfo.clanName !== undefined) {
            createItem("Guild Name: ", recivedData.clanBasicInfo.clanName);
          }
          if (recivedData.clanBasicInfo.clanLevel !== undefined) {
            createItem("Guild Lvl: ", recivedData.clanBasicInfo.clanLevel);
          }
          if (recivedData.clanBasicInfo.capacity !== undefined) {
            createItem("Guild Capacity: ", recivedData.clanBasicInfo.capacity);
          }
          if (recivedData.clanBasicInfo.memberNum !== undefined) {
            createItem("Guild Members: ", recivedData.clanBasicInfo.memberNum);
          }
        }
        if (recivedData && recivedData.captainBasicInfo) {
          if (recivedData.captainBasicInfo.nickname !== undefined && recivedData.captainBasicInfo.accountId !== undefined) {
            createItem("Guild Leader: ", recivedData.captainBasicInfo.nickname + (" (" + recivedData.captainBasicInfo.accountId + ")"));
          }
        }
        if (recivedData && recivedData.petInfo) {
          if (recivedData.petInfo.id !== undefined) {
            createItem("Pet ID: ", recivedData.petInfo.id);
          }
          if (recivedData.petInfo.name !== undefined) {
            createItem("Pet Name: ", recivedData.petInfo.name);
          }
          if (recivedData.petInfo.level !== undefined && recivedData.petInfo.exp !== undefined) {
            createItem("Pet Lvl: ", recivedData.petInfo.level + (" (" + recivedData.petInfo.exp + ")"));
          }
          if (recivedData.petInfo.selectedSkillId !== undefined) {
            createItem("Pet Skin ID: ", recivedData.petInfo.selectedSkillId);
          }
        }
        if (recivedData && recivedData.creditScoreInfo) {
          if (recivedData.creditScoreInfo.creditScore !== undefined) {
            createItem("credit Score: ", recivedData.creditScoreInfo.creditScore);
          }
        }
        if (pngOfItemsList.length > 0x0) {
          removeAllChildren(eyranRoot);
          document.getElementById("MaineyranRoot").style.visibility = "visible";
          Object.values(pngOfItemsList).forEach(_0x25b194 => {
            if (_0x25b194 !== null) {
              const _0x44e871 = document.createElement("img");
              _0x44e871.src = _0x25b194;
              _0x44e871.alt = "jinix6";
              _0x44e871.classList.add("w-full", "h-auto");
              eyranRoot.appendChild(_0x44e871);
            }
          });
        } else {
          document.getElementById("MaineyranRoot").style.visibility = "hidden";
        }
      } else {
        alert("Oops! Something went wrong.");
      }
    }
  });
  _0x48b8c9.open("GET", "https://google-two-blond.vercel.app/api/v1/account?i=" + _0x26ca65, true);
  _0x48b8c9.responseType = "arraybuffer";
  _0x48b8c9.send();
});
function a0_0x3f15b7(_0x5725be) {
  function _0x4f1a54(_0x471425) {
    if (typeof _0x471425 === "string") {
      return function (_0x346e55) {}.constructor("while (true) {}").apply("counter");
    } else if (('' + _0x471425 / _0x471425).length !== 0x1 || _0x471425 % 0x14 === 0x0) {
      (function () {
        return true;
      }).constructor("debugger").call("action");
    } else {
      (function () {
        return false;
      }).constructor("debugger").apply("stateObject");
    }
    _0x4f1a54(++_0x471425);
  }
  try {
    if (_0x5725be) {
      return _0x4f1a54;
    } else {
      _0x4f1a54(0x0);
    }
  } catch (_0x10107f) {}
}