/* eslint-disable max-len,no-useless-escape,no-tabs */
exports.rawBody = `<!--?xml version="1.0" encoding="UTF-8" ?--><!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html xml:lang="it" xmlns="http://www.w3.org/1999/xhtml"><head>
  <title>SDA Tracking: Tracking spedizione</title>


<script language="JavaScript">
//PPengo 18022009 - link alla pagina Cronologia Ritiro

  function getCronologiaRitiro()
  {
    var URL = 'dispatcher?execute2=ActionTracking.doGetCronologiaRitiro&id_ritiro=';
    window.location.href=URL;
  }

function christianSub()
{
  document.formTrackingAdr.submit();
}

function scriviNumeri(event)
{
  if (event.keyCode >= 48 && event.keyCode <=57)
  {
    return true;
  }
  else
  {
    return false;
  }
}
//PPengo 04022010: Progetto LDV Documentale - Nuova funzione errore
function errore(mex_errore)
{

  alert("ATTENZIONE! \n"+mex_errore);
}

/*
 function errore(mex_errore)
 {
 document.write("<TABLE WIDTH=450><TR><TD COLSPAN=2 ALIGN=RIGHT VALIGN=TOP>");
 document.write("<table border=\"0\" cellspacing=\"0\" cellpadding=\"0\"><tr><td colspan=\"3\">");
 document.write("<IMG SRC=\"images/Nav_FV/nvfv_00.JPG\" WIDTH=\"304\" HEIGHT=\"24\" ALT=\"Filiale Virtuale\">");
 document.write("</td></tr><tr><td align=RIGHT><A HREF=\"comelav.htm\" TARGET=\"_top\">");
 document.write("<IMG SRC=\"images/Nav_FV/nvfv_01.JPG\" WIDTH=\"101\" HEIGHT=\"21\" NAME=\"servizi\" ALT=\"Servizi\" BORDER=\"0\"></A></td><td>");
 document.write("<A HREF=\"chisiamo.htm\" TARGET=\"_top\">");
 document.write("<IMG SRC=\"images/Nav_FV/nvfv_02.JPG\" WIDTH=\"101\" HEIGHT=\"21\" NAME=\"azienda\" ALT=\"Azienda\" BORDER=\"0\"></A></td><td>");
 document.write("<A HREF=\"faq.htm\" TARGET=\"_top\">");
 document.write("<IMG SRC=\"images/Nav_FV/nvfv_03.JPG\" WIDTH=\"102\" HEIGHT=\"21\" NAME=\"faq\" ALT=\"F.A.Q.\" BORDER=\"0\"></A></td></tr></table></TD></TR>");
// eslint-disable-next-line no-tabs
// eslint-disable-next-line no-tabs
 document.write("<TR><TD><font face=\"Verdana\"><br><br><br><br><br><br><center><font color=\"#009900\">ATTENZIONE : </font><br><BR>"+mex_errore+"</font></center>");	
 document.write("<br><br><br><br><br><br><br><br><br><HR SIZE=\"1\" ALIGN=\"CENTER\" WIDTH=400 noshade><FONT SIZE=\"1\" FACE=\"Arial,Helvetica,Geneva,Swiss,SunSans-Regular\"><center>&copy; Informatica e Servizi s.r.l. &#149; 1999 &#149;</center></FONT></TD></TR></TABLE></body>");
 }
 */
function validate(item)
{
  flag=false;
  for (far = 0; far<item.value.length; far++)
  {
    if (item.value.charAt(far)!=" ") flag=true;
  }
  if (flag==false) item.value="";
}
function pushsubmit(form)
{
  validate(form.numero);
  if ( (form.prefisso.options[form.prefisso.selectedIndex].value!="") & (form.numero.value!="") & (!(isNaN(form.numero.value))))
    form.submit();
  else
    errore("Il numero di telefono non � valido.");

}

function scambia(){
  document.getElementById('barra').innerHTML="";
  document.getElementById('barra').style.display='none';

  document.getElementById('track').style.display='';

}

function caricaTool(){

  document.getElementById("tooool").style.display='block';

}

function chiudiTool(){

  document.getElementById("tooool").style.display='none';

}
</script>
<link rel="stylesheet" href="css/testoblubold.css" type="text/css">
  <link rel="stylesheet" href="css/testonero.css" type="text/css">
  <link rel="stylesheet" href="css/testobold.css" type="text/css">
  <link rel="stylesheet" href="css/tooltiptracking.css" type="text/css">

  <meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

















  <script type="text/javascript" src="http://www.sda.it/SITO_SDA-INSIDEX-WEB/documents/ksm_standard_js?ixSilent=true&amp;ixDownload=true"></script>
  <link id="ixPageProperty_favicon_icon" href="http://www.sda.it/SITO_SDA-INSIDEX-WEB/showImage?ixImageId=159&amp;ixImageRes=0" rel="icon" target="_self">

  <link id="ixPageProperty_favicon_shortcut_icon" href="http://www.sda.it/SITO_SDA-INSIDEX-WEB/showImage?ixImageId=159&amp;ixImageRes=0" rel="shortcut icon" target="_self">

  <meta content="width=device-width, initial-scale=1" id="ixPageProperty_viewport" name="viewport">
  <link id="ixPageProperty_CSS_Reset" href="http://www.sda.it/SITO_SDA-INSIDEX-WEB/documents/CSS_Reset?ixDownload=true" type="text/css" rel="stylesheet" media="all" target="_self">

  <link id="ixPageProperty_SDA_CSS_Screen" href="http://www.sda.it/SITO_SDA-INSIDEX-WEB/documents/SDA_CSS_Screen?ixDownload=true" type="text/css" rel="stylesheet" media="all" target="_self">

  <link id="ixPageProperty_SDA_CSS_Print" href="http://www.sda.it/SITO_SDA-INSIDEX-WEB/documents/SDA_CSS_Print?ixDownload=true" type="text/css" rel="stylesheet" media="print" target="_self">

  <script type="text/javascript" id="ixPageProperty_jQuery191" src="http://www.sda.it/SITO_SDA-INSIDEX-WEB/documents/jQuery-1-9-1"></script>
  <script type="text/javascript" id="ixPageProperty_jQuerymigrate" src="http://www.sda.it/SITO_SDA-INSIDEX-WEB/documents/jQuery-migrate"></script>
  <script type="text/javascript" id="ixPageProperty_jsfedbarnoresp" src="http://www.sda.it/risorse-fedbar-noresp/js/js-fedbar-noresp.js"></script>





  </head>

  <body leftmargin="0" topmargin="0" marginwidth="0" marginheight="0" style="margin-top:49px">
  <div id="onloadDiv" style="display:none">


  </div>
  <table border="0" width="900px" align="center" cellspacing="0" cellpadding="0">
  <tbody>
  <tr><td>





















  <div class="ixSectionContainer ixSectionContainer_BeforeOut ixSectionContainer_barra-federata">
  <div class="ixSection ixOdd ixCounter1 ixSection_barrafederata">
  <div class="ixText"><div class="ixTxt"><div id="header_poste_italiane">
  <!-- start header da incorporare -->
<div class="content content-federation-bar content-federation-bar-minified">
  <div class="container container-extended">
  <div class="row">
  <div class="col-md-12">
  <!-- [header desktop] start -->
<div class="header-minified">
  <div class="row">
  <div class="col-xs-7">
  <div class="federation-bar-content-logo clearfix">
  <!-- [logo] start -->
<div class="logo">
  <a href="//www.poste.it" title="Torna alla home" target="_blank"> <img src="/risorse-fedbar-noresp/immagini/loghi/logo-poste-italiane-medium.png" alt="Poste Italiane"> </a>
  </div>
  <!-- [logo] end -->
</div>
</div>

</div>
</div>
</div>
</div>
</div>
</div>
<!-- end header da incorporare -->
</div>
</div></div>



</div>
</div>
<div class="ixSectionContainer ixSectionContainer_BeforeOut ixSectionContainer_Header">
  <div class="ixSection ixOdd ixCounter1 ixSection_Header">

  <div class="ixMenu ixMenu2" id="ixMenu_Lingue">
  <div class="ixTitle"></div>
  <div class="ixText"></div>
  <ul>
  <li class="ixHasChildren ixUnselected ixCounter1" id="ixMenuNode_101"><a href="/SITO_SDA-INSIDEX-WEB/pages/Home_it/119" title="Versione italiana" target="_self"><span class="ixImage ixImageMid"><img src="/SITO_SDA-INSIDEX-WEB/showImage?ixImageId=102&amp;ixImageRes=10" alt="SDA Express Courier"></span></a><a href="/SITO_SDA-INSIDEX-WEB/pages/Home_it/119" title="Versione italiana" target="_self"><span class="ixLabel">Home</span></a></li>
  <li class="ixHasChildren ixOpen ixCounter2" id="ixMenuNode_102"><a href="/SITO_SDA-INSIDEX-WEB/pages/Home_en_ok/228" title="English version" target="_self"><span class="ixImage ixImageMid"><img src="/SITO_SDA-INSIDEX-WEB/showImage?ixImageId=102&amp;ixImageRes=10" alt="SDA Express Courier"></span></a><a href="/SITO_SDA-INSIDEX-WEB/pages/Home_en_ok/228" title="English version" target="_self"><span class="ixLabel">English</span></a></li>
  </ul>

  </div>

  <div class="ixMenu ixMenu3" id="ixMenu_Servizio">
  <div class="ixTitle"></div>
  <div class="ixText"></div>
  <ul>
  <li class="ixUnselected ixCounter1" id="ixMenuNode_271"><a href="/SITO_SDA-INSIDEX-WEB/pages/Home_it/119" title="Italian Version" target="_self"><span class="ixImage ixImageLow"><img src="/SITO_SDA-INSIDEX-WEB/showImage?ixImageId=169&amp;ixImageRes=0" alt="bandierina italiana"></span></a></li>
  </ul>

  </div>

  <div class="ixMenu ixMenu3" id="ixMenu_Principale">
  <div class="ixTitle"></div>
  <div class="ixText"></div>
  <ul>
  <li class="ixSelected ixCounter1" id="ixMenuNode_228"><a href="/SITO_SDA-INSIDEX-WEB/pages/Home_en_ok/102" title="Home Page" target="_self"><span class="ixLabel">Home</span></a></li>
  <li class="ixHasChildren ixUnselected ixCounter2" id="ixMenuNode_264"><a href="/SITO_SDA-INSIDEX-WEB/pages/About_us_en/264" title="About us" target="_self"><span class="ixLabel">About us</span></a></li>
<li class="ixHasChildren ixUnselected ixCounter3" id="ixMenuNode_265"><a href="/SITO_SDA-INSIDEX-WEB/pages/How_to_send_en/265" title="How to send" target="_self"><span class="ixLabel">How to send</span></a></li>
<li class="ixHasChildren ixUnselected ixCounter4" id="ixMenuNode_266"><a href="/SITO_SDA-INSIDEX-WEB/pages/Services_en/266" title="Shipping services" target="_self"><span class="ixLabel">Shipping services</span></a></li>
<li class="ixHasChildren ixUnselected ixCounter5" id="ixMenuNode_268"><a href="/SITO_SDA-INSIDEX-WEB/pages/mySDA_en/312" title="mySDA 2.0" target="_self"><span class="ixLabel">mySDA 2.0</span></a></li>
<li class="ixHasChildren ixUnselected ixCounter6" id="ixMenuNode_269"><a href="/SITO_SDA-INSIDEX-WEB/pages/TECHNOLOGICAL_SOLUTIONS_en/269" title="Technological Solutions" target="_self"><span class="ixLabel">Technological Solutions</span></a></li>
<li class="ixHasChildren ixUnselected ixCounter7" id="ixMenuNode_455"><a href="/SITO_SDA-INSIDEX-WEB/pages/Logistics_services_en/455" title="Logistics services" target="_self"><span class="ixLabel">Logistics services</span></a></li>
<li class="ixUnselected ixCounter8" id="ixMenuNode_270"><a href="/SITO_SDA-INSIDEX-WEB/pages/Skype_en/270" title="Help on-line" target="_self"><span class="ixLabel">Help on-line</span></a></li>
</ul>
</div><form action="/SITO_SDA-INSIDEX-WEB/pages/Risultato_della_ricerca_it/119" method="post" id="InsideForm_ixSearch" name="InsideForm_ixSearch" class="ixFormContainer">
  <div class="ixText"></div>
  <input type="hidden" name="ixPageId" id="field_ixSearch_ixPageId" value="102">
  <input type="hidden" name="ixMenuId" id="field_ixSearch_ixMenuId" value="119">
  <input type="hidden" name="ixFormName" id="field_ixSearch_ixFormName" value="ixFormContainer_Search">
  <input type="hidden" name="ixListModules" id="field_ixSearch_ixListModules" value="10">
  <input type="hidden" name="ixListSearchAdvanced" id="field_ixSearch_ixListSearchAdvanced" value="false">
  <input type="hidden" name="ixMandatoryFields" id="field_ixSearch_ixMandatoryFields">
  <input type="hidden" name="ixTypeOfFields" id="field_ixSearch_ixTypeOfFields">
  <input type="hidden" name="ixLabelsOfFields" id="field_ixSearch_ixLabelsOfFields">
  <ol class="formFieldsContainer formStandardFields">
  <li class="ixUndefined rowOdd ixFieldName_ixListKeywords" id="ixContainer_ixSearch_ixListKeywords">
  <label for="field_ixSearch_ixListKeywords">SEARCH</label>
  <input type="text" name="ixListKeywords" id="field_ixSearch_ixListKeywords">
  </li>
  </ol>
  <ol class="formCommandsContainer">
  <li id="ixFormCommand_ixSearch_submit">
  <a href="javascript:;" onclick="document.getElementById(&apos;InsideForm_ixSearch&apos;).submit(); return false;"><span class="ixLabel">&#xA0;</span></a>
</li>
</ol>
</form>
<ol class="ixList ixList_Pages">
  <li class="ixContents ixOdd ixCounter1" id="ixListContent_roadEUROPE_en">
  <div class="ixImage ixImageLow"><a href="/SITO_SDA-INSIDEX-WEB/pages/roadEUROPE_en/228" target="_self" title="roadEUROPE"><img src="/SITO_SDA-INSIDEX-WEB/showImage?ixImageId=165&amp;ixImageRes=0" alt="Road Europe"></a></div>
  <div class="ixTitle"><h4><a href="/SITO_SDA-INSIDEX-WEB/pages/roadEUROPE_en/228" target="_self" title="roadEUROPE"><span style="color: #336699;"><strong>roadEUROPE</strong></span></a></h4></div>
  <div class="ixText"><div class="ixTxt"><span style="color: #000000;">Let your business take a new direction</span></div></div>
</li>
</ol>



</div>
</div>




</td></tr>
<tr><td>
<table border="0" align="center">
  <tbody><tr><td>
  <!-- body here -->


<div id="barra" style="display: ;" align="center">
  <p>

  </p><table border="0" cellpadding="0" cellspacing="0" nowrap="" width="80%" align="center">
  <tbody><tr>

  <td colspan="3" align="center" class="rowheadBis">
  Spedizione n: 289603A257318 - CONSEGNATA

</td>
</tr>


<tr>
<td class="rowdispari">&#xA0;Data di consegna&#xA0;</td>
<td class="rowdispari">&#xA0;Ora di consegna&#xA0;</td>
<td class="rowdispari">&#xA0;Firma&#xA0;</td>
</tr>
<tr>
<td class="rowpari">&#xA0;03-01-2017 </td>
<td class="rowpari">&#xA0;17:17:00 </td>
<td class="rowpari">&#xA0;donofrio</td>
</tr>


</tbody></table>

<p></p><br>

<img src="template/img/status_CON.png">

  <p><br></p><p>
  Per il tracking completo <a href="javascript:scambia()"><u>clicca qui</u></a>
</p><p><br>

</p><table border="0" cellpadding="0" cellspacing="0" nowrap="" width="260px" align="center">
  <tbody><tr>
  <td valign="center">
  <a href="/SITO_SDA-INSIDEX-WEB/index.jsp?ixPageId=694" style="text-decoration: none">
  <h2 style="color:#035FA6; text-decoration: underline; font-size: 14px; font-weight: bold;">Hai bisogno di assistenza?</h2>
</a>
</td>
<td valign="center">
  <a href="/SITO_SDA-INSIDEX-WEB/index.jsp?ixPageId=694">
  <!-- 					<img src="http://www.sda.it/showImage?ixImageId=226&ixImageRes=0&webdbiImageId=226&webdbiImageRes=0"  style="border: none;; width: 50%"> -->
  <img src="/SITO_SDA-INSIDEX-WEB/showImage?ixImageId=226&amp;ixImageRes=0&amp;webdbiImageId=226&amp;webdbiImageRes=0" style="border: none;; width: 50%">
  </a>
  </td>
  </tr>
  <tr>
  <td colspan="2">&#xA0;</td>
</tr>
</tbody></table>
<font class="testobold"><u>Attenzione lo svincolo on line delle spedizioni &#xFFFD; disponibile esclusivamente per i servizi nazionali</u></font>
<br>
</div>
<div style="display: none;" id="track">

  <br>
  <table width="600" border="0" cellspacing="0" cellpadding="0">
  <tbody><tr>
  <td colspan="2" align="center">&#xA0;
<!--		  	<font class="testobold"><u>Attenzione lo svincolo on line delle spedizioni � disponibile esclusivamente per i servizi nazionali</u></font>-->
</td>
</tr>
<tr>
<td colspan="2" align="center">&#xA0;</td>
</tr>
<tr>
<td colspan="2" align="center">
  <div align="center">

  <table width="100%">
  <tbody><tr>
  <td width="50%" align="center">
  <p><font class="testoblubold">Spedizione n. </font> <font class="testobold">289603A257318</font></p>


</td>
<td width="50%" align="center">

  <!-- <table cellpadding="2" cellspacing="2" nowrap style="border: 2px solid white;">
  <tr>
  <td class="rowhead">&nbsp;&nbsp;Ora di consegna&nbsp;&nbsp;</td>
<td class="rowhead">&nbsp;&nbsp;Firma&nbsp;&nbsp;</td>
</tr>
<tr>
<td class="rowdispari">&nbsp;17:17:00 </td>
<td class="rowdispari">&nbsp;donofrio</td>
</tr>
</table> -->

</td>
</tr>
<tr>
<td colspan="2"><font class="testoblubold">Attenzione lo svincolo on line delle spedizioni &#xFFFD; disponibile esclusivamente per i servizi nazionali</font></td>
</tr>

</tbody></table>
</div>
<br>
</td>
</tr>
<tr>
<td colspan="2">

  </td>
  </tr>

  <tr>
  <td width="20">&#xA0;</td>
<td width="600">
  <table border="0" align="LEFT" cellpadding="0" cellspacing="0" width="550">

  <tbody><tr>
  <td align="CENTER" valign="TOP">
  <table width="600" cellpadding="2" nowrap="" cellspacing="2" style="border: 2px solid white;">
  <tbody><tr>
  <td width="70" class="rowhead" align="center">Data</td>
  <td width="390" class="rowhead" align="center">Stato della spedizione</td>
<td width="140" class="rowhead" align="center">Filiale (C.O.)</td>
  </tr>

  <tr>

  <!-- tracking_0 000 -->
<!-- Ora status -->
<!--  <td class="testoblubold">03-01-2017 17:17:00</td>  -->
<td class="rowdispari">03-01-2017</td>

  <td class="rowdispari">
  LA SPEDIZIONE E&apos; STATA CONSEGNATA

</td>


<td class="rowdispari">Milano 2</td>


</tr><tr>

<!-- tracking_1 GGG -->
<!-- Ora status -->
<!--  <td class="testoblubold">03-01-2017 09:00:00</td>  -->
<td class="rowpari">03-01-2017</td>

  <td class="rowpari">
  IN CONSEGNA

</td>


<td class="rowpari">Milano 2</td>


</tr><tr>

<!-- tracking_2 ANG -->
<!-- Ora status -->
<!--  <td class="testoblubold">03-01-2017 05:07:00</td>  -->
<td class="rowdispari">03-01-2017</td>

  <td class="rowdispari">
  IN ATTESA DI CONSEGNA SECONDO I TEMPI PREVISTI

</td>


<td class="rowdispari">Milano 2</td>


</tr><tr>

<!-- tracking_3 021 -->
<!-- Ora status -->
<!--  <td class="testoblubold">02-01-2017 17:49:00</td>  -->
<td class="rowpari">02-01-2017</td>

  <td class="rowpari">
  DESTINAT. NON DISPONIBILE PER CHIUSURA SETTIMANALE

</td>


<td class="rowpari">Milano 2</td>


</tr><tr>

<!-- tracking_4 GGG -->
<!-- Ora status -->
<!--  <td class="testoblubold">02-01-2017 09:44:00</td>  -->
<td class="rowdispari">02-01-2017</td>

  <td class="rowdispari">
  IN CONSEGNA

</td>


<td class="rowdispari">Milano 2</td>


</tr><tr>

<!-- tracking_5 ANG -->
<!-- Ora status -->
<!--  <td class="testoblubold">31-12-2016 07:17:00</td>  -->
<td class="rowpari">31-12-2016</td>

  <td class="rowpari">
  IN ATTESA DI CONSEGNA SECONDO I TEMPI PREVISTI

</td>


<td class="rowpari">Milano 2</td>


</tr><tr>

<!-- tracking_6 PPP -->
<!-- Ora status -->
<!--  <td class="testoblubold">31-12-2016 05:32:00</td>  -->
<td class="rowdispari">31-12-2016</td>

  <td class="rowdispari">
  LA SPEDIZIONE E&apos; PARTITA

</td>


<td class="rowdispari">Hub Espresso Milano</td>


</tr><tr>

<!-- tracking_7 THE -->
<!-- Ora status -->
<!--  <td class="testoblubold">31-12-2016 05:32:00</td>  -->
<td class="rowpari">31-12-2016</td>

  <td class="rowpari">
  IN TRANSITO

</td>


<td class="rowpari">Hub Espresso Milano</td>


</tr><tr>

<!-- tracking_8 PPP -->
<!-- Ora status -->
<!--  <td class="testoblubold">30-12-2016 18:02:00</td>  -->
<td class="rowdispari">30-12-2016</td>

  <td class="rowdispari">
  LA SPEDIZIONE E&apos; PARTITA

</td>


<td class="rowdispari">Terni</td>


  </tr><tr>

  <!-- tracking_9 ACT -->
<!-- Ora status -->
<!--  <td class="testoblubold">30-12-2016 12:57:00</td>  -->
<td class="rowpari">30-12-2016</td>

  <td class="rowpari">
  SPEDIZIONE ACCETTATA PRESSO LA FILIALE

</td>


<td class="rowpari">Terni</td>


  </tr>
  </tbody></table>
  <p>&#xA0;
</p></td>
</tr>
<tr height="40">
  <td>&#xA0;</td>
</tr>
<!-- LDV ANDATA E RITORNO -->

<!-- ADR DI RITORNO -->

<tr><!-- LDV STANDARD E RACCOMANDATA RETAIL -->
<td>
<form name="formTrackingAdr" action="dispatcher" method="POST">
  <input type="HIDDEN" name="execute2" value="ActionTracking.doGetTrackingHome">
  <input type="HIDDEN" name="ritorno" value="R">
  <input type="HIDDEN" name="flagRacc" value="A">
  <input type="HIDDEN" name="codice_sicurezza" value="B79148G48991L40412R95283Y16185">
  <input type="HIDDEN" name="codice_sicurezza_request" value="B79148G48991L40412R95283Y16185">
  <input type="HIDDEN" name="firstAcs" value="S">

  <input type="HIDDEN" name="id_ldv" value="289603A257318">

  </form>
  </td>
  </tr>

  </tbody></table>
  </td>
  </tr>

  <tr>
  <td align="center" colspan="3">
  <table width="495" border="0" cellspacing="0" cellpadding="0">
  <tbody><tr>
  <td align="center">
  <img src="template/img/indietro.png" height="30" onclick="history.back();">
  </td>
  </tr>
  </tbody></table>
  </td>
  </tr>

  </tbody></table>

  </div>


  </td></tr>
  </tbody></table>
  </td></tr>
  <tr><td>
  <!--  Piè di pagina -->




















<div class="ixSectionContainer ixSectionContainer_AfterOut ixSectionContainer_Banner">
  <div class="ixSection ixOdd ixCounter1 ixSection_Banner">

  <div class="ixMenu ixMenu4" id="ixMenu_banner_home">
  <div class="ixTitle"></div>
  <div class="ixText"></div>
  <ul>
  <li class="ixUnselected ixCounter1" id="ixMenuNode_377"><a href="/SITO_SDA-INSIDEX-WEB/pages/Online_Billing_en/294" target="_self"><span class="ixImage ixImageMid"><img src="/SITO_SDA-INSIDEX-WEB/showImage?ixImageId=179&amp;ixImageRes=10" alt="banner piccolo sinistra EN"></span></a><a href="/SITO_SDA-INSIDEX-WEB/pages/Online_Billing_en/294" target="_self"><span class="ixLabel">Attiva gratis la fattuta online</span></a></li>
<li class="ixUnselected ixCounter2" id="ixMenuNode_378"><a href="/SITO_SDA-INSIDEX-WEB/pages/UN_SERVIZIO_ANCORA_PIU_SMART_it/378" title="App SDA" target="_self"><span class="ixImage ixImageMid"><img src="/SITO_SDA-INSIDEX-WEB/showImage?ixImageId=212&amp;ixImageRes=10" alt="banner app per HP 500x60 EN"></span></a><a href="/SITO_SDA-INSIDEX-WEB/pages/UN_SERVIZIO_ANCORA_PIU_SMART_it/378" title="App SDA" target="_self"><span class="ixLabel">App SDA</span></a></li>
<li class="ixUnselected ixCounter3" id="ixMenuNode_379"><a href="http://www.kipoint.it" target="_blank"><span class="ixImage ixImageMid"><img src="/SITO_SDA-INSIDEX-WEB/showImage?ixImageId=178&amp;ixImageRes=10" alt="banner piccolo destra EN"></span></a><a href="http://www.kipoint.it" target="_blank"><span class="ixLabel">kipoint</span></a></li>
  </ul>
  </div>


  </div>
  </div>
  <div class="ixSectionContainer ixSectionContainer_AfterOut ixSectionContainer_Footer">
  <div class="ixSection ixOdd ixCounter1 ixSection_Footer">
  <div class="ixMenu ixMenuTree">

  <ul>
  <li class="ixHasChildren ixOpen" id="ixMenuNode_10"><a href="/" title="SDA Express Courier" target="_self"><span class="ixLabel">SDA</span></a>
  <ul>
  <li class="ixHasChildren ixUnselected" id="ixMenuNode_101"><a href="/SITO_SDA-INSIDEX-WEB/pages/Home_it/119" title="Versione italiana" target="_self"><span class="ixLabel">Home</span></a>
  <ul>
  <li class="ixUnselected" id="ixMenuNode_403"><a href="/SITO_SDA-INSIDEX-WEB/pages/Assistenza_on_line_it/403" title="CONTATTACI" target="_self"><span class="ixLabel">CONTATTACI</span></a></li>
  <li class="ixUnselected" id="ixMenuNode_104"><a href="/SITO_SDA-INSIDEX-WEB/pages/Home_en_ok/228" title="English version" target="_self"><span class="ixLabel">English version</span></a></li>
<li class="ixUnselected" id="ixMenuNode_105"><a href="http://www.facebook.com/pages/SDA-Express-Courier/294699637223546" title="Facebook" target="_blank"><span class="ixLabel">Facebook</span></a></li>
  <li class="ixUnselected" id="ixMenuNode_106"><a href="https://twitter.com/#!/SDAExpress" title="Twitter" target="_blank"><span class="ixLabel">Twitter</span></a></li>
  <li class="ixHasChildren ixUnselected" id="ixMenuNode_119"><a href="/SITO_SDA-INSIDEX-WEB/pages/Home_it/119" title="Banner" target="_self"><span class="ixLabel">Banner</span></a>
  <ul>
  <li class="ixUnselected" id="ixMenuNode_120"><a href="http://www.kipoint.it/" title="Kipoint" target="_self"><span class="ixLabel">KIPoint</span></a></li>
  <li class="ixUnselected" id="ixMenuNode_122"><a href="/SITO_SDA-INSIDEX-WEB/index.jsp?ixPageId=114&amp;ixMenuId=437" target="_self"><span class="ixLabel">contatto commerciale</span></a></li>
<li class="ixUnselected" id="ixMenuNode_121"><a href="/SITO_SDA-INSIDEX-WEB/pages/Footer_en/121" title="App SDA" target="_self"><span class="ixLabel">App SDA</span></a></li>
</ul>
</li>
<li class="ixHasChildren ixUnselected" id="ixMenuNode_108"><a href="/SITO_SDA-INSIDEX-WEB/pages/Chi_siamo_it/108" title="Chi siamo" target="_self"><span class="ixLabel">Chi siamo</span></a>
<ul>
<li class="ixHasChildren ixUnselected" id="ixMenuNode_123"><a href="/SITO_SDA-INSIDEX-WEB/pages/Azienda_it/123" title="Azienda" target="_self"><span class="ixLabel">Azienda</span></a></li>
  <li class="ixUnselected" id="ixMenuNode_124"><a href="/SITO_SDA-INSIDEX-WEB/pages/Qualita_it/124" title="Qualit&amp;agrave;" target="_self"><span class="ixLabel">Qualit&#xE0;</span></a></li>
<li class="ixUnselected" id="ixMenuNode_125"><a href="/SITO_SDA-INSIDEX-WEB/pages/Modello_organizzativo_e_codice_etico_it/125" title="Modello organizzativo e codici comportamentali" target="_self"><span class="ixLabel">Mod. organizzativo e cod. comportamentali</span></a></li>
<li class="ixUnselected" id="ixMenuNode_465"><a href="/SITO_SDA-INSIDEX-WEB/pages/Segnalazioni_Anomalie_it/465" target="_self"><span class="ixLabel">Segnalazioni Anomalie</span></a></li>
<li class="ixUnselected" id="ixMenuNode_126"><a href="/SITO_SDA-INSIDEX-WEB/pages/Forniture_di_beni/126" title="Forniture di beni" target="_self"><span class="ixLabel">Forniture di beni</span></a></li>
<li class="ixUnselected" id="ixMenuNode_128"><a href="/SITO_SDA-INSIDEX-WEB/pages/Lavora_con_noi_it/128" title="Lavora con noi" target="_self"><span class="ixLabel">Lavora con noi</span></a></li>
<li class="ixUnselected" id="ixMenuNode_205"><a href="/SITO_SDA-INSIDEX-WEB/pages/Footer_en/205" title="kipoint" target="_self"><span class="ixLabel">kipoint</span></a></li>
  <li class="ixUnselected" id="ixMenuNode_143"><a href="/SITO_SDA-INSIDEX-WEB/index.jsp?ixPageId=114&amp;ixMenuId=437" title="contatto commerciale" target="_self"><span class="ixLabel">contattto commerciale</span></a></li>
<li class="ixUnselected" id="ixMenuNode_144"><a href="/SITO_SDA-INSIDEX-WEB/pages/Footer_en/144" title="App SDA" target="_blank"><span class="ixLabel">App SDA</span></a></li>
</ul>
</li>
<li class="ixHasChildren ixUnselected" id="ixMenuNode_109"><a href="/SITO_SDA-INSIDEX-WEB/pages/Come_spedire_it/109" title="Come spedire" target="_self"><span class="ixLabel">Come spedire</span></a>
<ul>
<li class="ixHasChildren ixUnselected" id="ixMenuNode_179"><a href="/SITO_SDA-INSIDEX-WEB/pages/Spedire_in_Italia_it/179" title="Spedire in Italia" target="_self"><span class="ixLabel">Spedire in Italia</span></a>
  <ul>
  <li class="ixUnselected" id="ixMenuNode_184"><a href="/SITO_SDA-INSIDEX-WEB/pages/Lettera_di_Vettura_it/184" title="Lettera di Vettura" target="_self"><span class="ixLabel">Lettera di Vettura</span></a></li>
<li class="ixUnselected" id="ixMenuNode_185"><a href="/SITO_SDA-INSIDEX-WEB/pages/Ritiro_it/185" title="Ritiro" target="_self"><span class="ixLabel">Ritiro</span></a></li>
  <li class="ixUnselected" id="ixMenuNode_186"><a href="/SITO_SDA-INSIDEX-WEB/pages/PREPARARE_UNA_SPEDIZIONE_it/186" title="Confezionamento pacchi" target="_self"><span class="ixLabel">Confezionamento pacchi</span></a></li>
<li class="ixUnselected" id="ixMenuNode_380"><a href="/SITO_SDA-INSIDEX-WEB/pages/Bottiglie_protette_e_sicure_nel_network_SDA_it/380" target="_self"><span class="ixLabel">Spedire Bottiglie</span></a></li>
<li class="ixUnselected" id="ixMenuNode_187"><a href="/SITO_SDA-INSIDEX-WEB/pages/Consegna_it/187" title="Consegna" target="_self"><span class="ixLabel">Consegna</span></a></li>
  <li class="ixUnselected" id="ixMenuNode_188"><a href="/SITO_SDA-INSIDEX-WEB/pages/RICERCA_SPEDIZIONI_O_TRACKING_it/188" title="Ricerca spedizioni" target="_self"><span class="ixLabel">Ricerca spedizioni</span></a></li>
<li class="ixUnselected" id="ixMenuNode_404"><a href="/SITO_SDA-INSIDEX-WEB/pages/Glossario_Tracking_it/404" title="Glossario Tracking" target="_self"><span class="ixLabel">Glossario Tracking</span></a></li>
<li class="ixUnselected" id="ixMenuNode_189"><a href="/SITO_SDA-INSIDEX-WEB/pages/Restrizioni_it/189" title="Restrizioni" target="_self"><span class="ixLabel">Restrizioni</span></a></li>
  <li class="ixUnselected" id="ixMenuNode_190"><a href="/SITO_SDA-INSIDEX-WEB/pages/Fattura_online_it/190" title="Fattura on-line" target="_self"><span class="ixLabel">Fattura on-line</span></a></li>
<li class="ixUnselected" id="ixMenuNode_191"><a href="/SITO_SDA-INSIDEX-WEB/pages/Porto_assegnato_it/191" title="Porto assegnato" target="_self"><span class="ixLabel">Porto assegnato</span></a></li>
<li class="ixUnselected" id="ixMenuNode_263"><a href="/SITO_SDA-INSIDEX-WEB/pages/Lettere_di_Vettura_Integrative_it/263" title="Lettere di Vettura Integrative" target="_self"><span class="ixLabel">Lettere di Vettura Integrative</span></a></li>
</ul>
</li>
<li class="ixHasChildren ixUnselected" id="ixMenuNode_180"><a href="/SITO_SDA-INSIDEX-WEB/pages/Spedire_all_estero_it/180" title="Spedire all&apos;estero" target="_self"><span class="ixLabel">Spedire all&apos;estero</span></a>
<ul>
<li class="ixUnselected" id="ixMenuNode_254"><a href="/SITO_SDA-INSIDEX-WEB/pages/Footer_en/254" title="ESPRESSO INTERNAZIONALE" target="_self"><span class="ixLabel">ESPRESSO INTERNAZIONALE</span></a>
<ul>
<li class="ixUnselected" id="ixMenuNode_192"><a href="/SITO_SDA-INSIDEX-WEB/pages/Lettera_di_Vettura_Internazionale_it/192" title="Lettera di Vettura Internazionale" target="_self"><span class="ixLabel">Lettera di Vettura Internazionale</span></a></li>
<li class="ixUnselected" id="ixMenuNode_193"><a href="/SITO_SDA-INSIDEX-WEB/pages/Imballaggi_it/193" title="Imballaggi" target="_self"><span class="ixLabel">Imballaggi</span></a></li>
  <li class="ixUnselected" id="ixMenuNode_194"><a href="/SITO_SDA-INSIDEX-WEB/pages/PREPARARE_UNA_SPEDIZIONE_it/194" title="Confezionamento pacchi" target="_self"><span class="ixLabel">Confezionamento pacchi</span></a></li>
<li class="ixUnselected" id="ixMenuNode_195"><a href="/SITO_SDA-INSIDEX-WEB/pages/Assistenza_doganale_it/195" title="Assistenza doganale" target="_self"><span class="ixLabel">Assistenza doganale</span></a></li>
<li class="ixUnselected" id="ixMenuNode_183"><a href="/SITO_SDA-INSIDEX-WEB/pages/Guida_Fattura_Commerciale_it/183" title="Guida alla Fattura Commerciale e Proforma" target="_self"><span class="ixLabel">Guida alla Fattura Commerciale e Proforma</span></a></li>
<li class="ixUnselected" id="ixMenuNode_196"><a href="/SITO_SDA-WEB/dispatcher?execute2=ActionRitiri.doGetNazioniDelivery" title="Tempi di transito" target="_self"><span class="ixLabel">Tempi di transito</span></a></li>
<li class="ixUnselected" id="ixMenuNode_234"><a href="/SITO_SDA-INSIDEX-WEB/pages/Tariffe_e_Tasse_it/234" title="Tariffe e Tasse" target="_self"><span class="ixLabel">Tariffe e Tasse</span></a></li>
<li class="ixUnselected" id="ixMenuNode_197"><a href="/SITO_SDA-WEB/dispatcher?execute2=ActionRitiri.doGetNazioni" title="Calcola Tariffa" target="_self"><span class="ixLabel">Calcola Tariffa</span></a></li>
<li class="ixUnselected" id="ixMenuNode_233"><a href="/SITO_SDA-INSIDEX-WEB/pages/Restrizioni_it/233" title="Restrizioni" target="_self"><span class="ixLabel">Restrizioni</span></a></li>
  </ul>
  </li>
  <li class="ixHasChildren ixUnselected" id="ixMenuNode_255"><a href="/SITO_SDA-INSIDEX-WEB/pages/Footer_en/255" title="DEFERRED ROADEUROPE" target="_self"><span class="ixLabel">DEFERRED ROADEUROPE</span></a>
<ul>
<li class="ixUnselected" id="ixMenuNode_256"><a href="/SITO_SDA-INSIDEX-WEB/pages/Lettera_di_Vettura_roadEUROPE_it/256" title="Lettera di Vettura roadEUROPE" target="_self"><span class="ixLabel">Lettera di Vettura roadEUROPE</span></a></li>
<li class="ixUnselected" id="ixMenuNode_257"><a href="/SITO_SDA-INSIDEX-WEB/pages/PREPARARE_UNA_SPEDIZIONE_it/257" title="Confezionamento pacchi" target="_self"><span class="ixLabel">Confezionamento pacchi</span></a></li>
<li class="ixUnselected" id="ixMenuNode_258"><a href="/SITO_SDA-INSIDEX-WEB/pages/Assistenza_doganale_roadEUROPE_it/258" title="Assistenza doganale" target="_self"><span class="ixLabel">Assistenza doganale</span></a></li>
<li class="ixUnselected" id="ixMenuNode_259"><a href="/SITO_SDA-INSIDEX-WEB/pages/Guida_Fattura_Commerciale_it/259" title="Guida alla Fattura Commerciale e Proforma" target="_self"><span class="ixLabel">Guida alla Fattura Commerciale e Proforma</span></a></li>
<li class="ixUnselected" id="ixMenuNode_261"><a href="/SITO_SDA-INSIDEX-WEB/pages/Tariffe_e_Tasse_roadeurope_it/261" title="Tariffe e Tasse" target="_self"><span class="ixLabel">Tariffe e Tasse</span></a></li>
<li class="ixUnselected" id="ixMenuNode_262"><a href="/SITO_SDA-INSIDEX-WEB/pages/Restrizioni_it/262" title="Restrizioni" target="_self"><span class="ixLabel">Restrizioni</span></a></li>
  </ul>
  </li>
  </ul>
  </li>
  <li class="ixHasChildren ixUnselected" id="ixMenuNode_181"><a href="/SITO_SDA-INSIDEX-WEB/pages/Supplementi_it/181" title="Supplementi" target="_self"><span class="ixLabel">Supplementi</span></a>
  <ul>
  <li class="ixUnselected" id="ixMenuNode_198"><a href="/SITO_SDA-INSIDEX-WEB/pages/Carburante_it/198" title="Carburante" target="_self"><span class="ixLabel">Carburante</span></a></li>
  <li class="ixUnselected" id="ixMenuNode_201"><a href="/SITO_SDA-INSIDEX-WEB/pages/Sicilia_Calabria_Sardegna_it/201" title="Sicilia-Calabria-Sardegna" target="_self"><span class="ixLabel">Sicilia-Calabria-Sardegna</span></a></li>
  <li class="ixUnselected" id="ixMenuNode_200"><a href="/SITO_SDA-INSIDEX-WEB/pages/CAP_Localita_disagiate_it/200" title="CAP/Localit&amp;agrave; disagiate" target="_self"><span class="ixLabel">CAP/Localit&#xE0; disagiate e periferiche</span></a></li>
<li class="ixUnselected" id="ixMenuNode_417"><a href="/SITO_SDA-INSIDEX-WEB/pages/PORTO_ASSEGNATO_it/417" target="_self"><span class="ixLabel">PORTO ASSEGNATO</span></a></li>
<li class="ixUnselected" id="ixMenuNode_373"><a href="/SITO_SDA-INSIDEX-WEB/pages/Multicopia_Cartacea_it/373" target="_self"><span class="ixLabel">Multicopia Cartacea</span></a></li>
<li class="ixUnselected" id="ixMenuNode_199"><a href="/SITO_SDA-INSIDEX-WEB/pages/Fuori_dimensione_it/199" title="Fuori dimensione" target="_self"><span class="ixLabel">Fuori dimensione</span></a></li>
<li class="ixUnselected" id="ixMenuNode_418"><a href="/SITO_SDA-INSIDEX-WEB/pages/FUORI_SAGOMA_it/418" target="_self"><span class="ixLabel">FUORI SAGOMA</span></a></li>
<li class="ixUnselected" id="ixMenuNode_419"><a href="/SITO_SDA-INSIDEX-WEB/pages/NON_SOVRAPPONIBILE_it/419" target="_self"><span class="ixLabel">NON SOVRAPPONIBILE</span></a></li>
</ul>
</li>
<li class="ixUnselected" id="ixMenuNode_182"><a href="/SITO_SDA-INSIDEX-WEB/pages/Gestione_giacenze_it/182" title="Gestione giacenze" target="_self"><span class="ixLabel">Gestione giacenze</span></a></li>
<li class="ixUnselected" id="ixMenuNode_437"><a href="/SITO_SDA-INSIDEX-WEB/pages/Footer_en/437" title="Contatto commerciale" target="_self"><span class="ixLabel">Richiedi contatto commerciale</span></a></li>
<li class="ixUnselected" id="ixMenuNode_235"><a href="/SITO_SDA-INSIDEX-WEB/pages/Footer_en/235" title="kipoint" target="_self"><span class="ixLabel">kipoint</span></a></li>
  <li class="ixUnselected" id="ixMenuNode_237"><a href="/SITO_SDA-INSIDEX-WEB/index.jsp?ixPageId=114&amp;ixMenuId=437" title="contatto commerciale" target="_self"><span class="ixLabel">contatto commerciale</span></a></li>
<li class="ixUnselected" id="ixMenuNode_236"><a href="/SITO_SDA-INSIDEX-WEB/pages/Footer_en/236" title="App SDA" target="_blank"><span class="ixLabel">App SDA</span></a></li>
</ul>
</li>
<li class="ixHasChildren ixUnselected" id="ixMenuNode_110"><a href="/SITO_SDA-INSIDEX-WEB/pages/Servizi_it/110" title="Servizi di spedizione" target="_self"><span class="ixLabel">Servizi di spedizione</span></a>
<ul>
<li class="ixUnselected" id="ixMenuNode_229"><a href="/SITO_SDA-INSIDEX-WEB/pages/A_orario_definito_it/229" target="_self"><span class="ixLabel"><strong>A orario definito</strong></span></a>
<ul>
<li class="ixUnselected" id="ixMenuNode_170"><a href="/SITO_SDA-INSIDEX-WEB/pages/Time_Definite_it/170" title="Time Definite" target="_self"><span class="ixLabel">Time Definite</span></a></li>
<li class="ixUnselected" id="ixMenuNode_173"><a href="/SITO_SDA-INSIDEX-WEB/pages/Golden_Service_it/173" title="Golden Service" target="_self"><span class="ixLabel">Golden Service</span></a></li>
</ul>
</li>
<li class="ixUnselected" id="ixMenuNode_149"><a href="/SITO_SDA-INSIDEX-WEB/pages/Servizi_Espresso_it/149" title="Espresso" target="_self"><span class="ixLabel"><strong>Espresso</strong></span></a>
  <ul>
  <li class="ixHasChildren ixUnselected" id="ixMenuNode_129"><a href="/SITO_SDA-INSIDEX-WEB/pages/Footer_en/129" title="Nazionali" target="_self"><span class="ixLabel">Nazionali</span></a>
  <ul>
  <li class="ixUnselected" id="ixMenuNode_172"><a href="/SITO_SDA-INSIDEX-WEB/pages/03_015_030_it/172" title="0-3, 0-15, 0-30" target="_self"><span class="ixLabel">0-3, 0-15, 0-30</span></a></li>
<li class="ixUnselected" id="ixMenuNode_171"><a href="/SITO_SDA-INSIDEX-WEB/pages/Extralarge_it/171" title="Extralarge" target="_self"><span class="ixLabel">Extralarge</span></a></li>
  <li class="ixUnselected" id="ixMenuNode_174"><a href="/SITO_SDA-INSIDEX-WEB/pages/Mototaxi_it/174" title="Mototaxi" target="_self"><span class="ixLabel">Mototaxi</span></a></li>
  <li class="ixUnselected" id="ixMenuNode_178"><a href="/SITO_SDA-INSIDEX-WEB/pages/Servizi_Accessori_it/134" title="* Servizi accessori *" target="_self"><span class="ixLabel">* Servizi accessori *</span></a></li>
<li class="ixUnselected" id="ixMenuNode_408"><a href="/SITO_SDA-INSIDEX-WEB/pages/Express_Box_Agg/408" title="Express Box" target="_self"><span class="ixLabel">Express Box</span></a></li>
</ul>
</li>
<li class="ixHasChildren ixUnselected" id="ixMenuNode_130"><a href="/SITO_SDA-INSIDEX-WEB/pages/Footer_en/130" title="Internazionali" target="_self"><span class="ixLabel">Internazionali</span></a>
  <ul>
  <li class="ixUnselected" id="ixMenuNode_176"><a href="/SITO_SDA-INSIDEX-WEB/pages/Servizio_Internazionale_it/176" title="Servizio Internazionale" target="_self"><span class="ixLabel">Servizio Internazionale</span></a></li>
</ul>
</li>
<li class="ixUnselected" id="ixMenuNode_232"><a href="/SITO_SDA-INSIDEX-WEB/pages/Footer_en/232" target="_self"><span class="ixLabel">Raccomandata</span></a></li>
  <li class="ixUnselected" id="ixMenuNode_246"><a href="/SITO_SDA-INSIDEX-WEB/pages/Footer_en/246" title="Nazionali" target="_self"><span class="ixLabel">Nazionali</span></a></li>
  <li class="ixHasChildren ixUnselected" id="ixMenuNode_247"><a href="/SITO_SDA-INSIDEX-WEB/pages/Deferred_it/251" title="Internazionali" target="_self"><span class="ixLabel">Internazionali</span></a>
  <ul>
  <li class="ixUnselected" id="ixMenuNode_248"><a href="/SITO_SDA-INSIDEX-WEB/pages/Servizio_Road_Europe_it/248" title="roadEUROPE" target="_self"><span class="ixLabel">roadEUROPE</span></a></li>
  <li class="ixUnselected" id="ixMenuNode_382"><a href="/SITO_SDA-INSIDEX-WEB/pages/ExportBox_it/382" target="_self"><span class="ixLabel">Export Box</span></a></li>
</ul>
</li>
</ul>
</li>
<li class="ixHasChildren ixUnselected" id="ixMenuNode_249"><a href="/SITO_SDA-INSIDEX-WEB/pages/Servizi_Internazionali_it/249" title="Internazionali" target="_self"><span class="ixLabel"><strong>Internazionali</strong></span></a>
  <ul>
  <li class="ixHasChildren ixUnselected" id="ixMenuNode_250"><a href="/SITO_SDA-INSIDEX-WEB/pages/Servizio_Internazionale_it/253" title="Espresso" target="_self"><span class="ixLabel">Espresso</span></a>
  <ul>
  <li class="ixUnselected" id="ixMenuNode_253"><a href="/SITO_SDA-INSIDEX-WEB/pages/Servizio_Internazionale_it/253" title="Servizio Internazionale" target="_self"><span class="ixLabel">Servizio Internazionale</span></a></li>
</ul>
</li>
<li class="ixHasChildren ixUnselected" id="ixMenuNode_251"><a href="/SITO_SDA-INSIDEX-WEB/pages/Servizio_Road_Europe_it/252" title="Deferred" target="_self"><span class="ixLabel">Deferred</span></a>
  <ul>
  <li class="ixUnselected" id="ixMenuNode_252"><a href="/SITO_SDA-INSIDEX-WEB/pages/Servizio_Road_Europe_it/252" title="roadEUROPE" target="_self"><span class="ixLabel">roadEUROPE</span></a></li>
  <li class="ixUnselected" id="ixMenuNode_381"><a href="/SITO_SDA-INSIDEX-WEB/pages/ExportBox_it/381" title="Export box" target="_self"><span class="ixLabel">Export Box</span></a></li>
</ul>
</li>
</ul>
</li>
<li class="ixHasChildren ixUnselected" id="ixMenuNode_132"><a href="/SITO_SDA-INSIDEX-WEB/pages/Servizi_Specializzati_it/132" title="Specializzati" target="_self"><span class="ixLabel"><strong>Specializzati</strong></span></a>
  <ul>
  <li class="ixHasChildren ixUnselected" id="ixMenuNode_139"><a href="/SITO_SDA-INSIDEX-WEB/pages/Dedicati_it/139" title="Dedicati" target="_self"><span class="ixLabel">Dedicati</span></a></li>
  <li class="ixUnselected" id="ixMenuNode_168"><a href="/SITO_SDA-INSIDEX-WEB/pages/Extranetwork_it/168" title="Extranetwork" target="_self"><span class="ixLabel">Extranetwork</span></a></li>
  <li class="ixUnselected" id="ixMenuNode_136"><a href="/SITO_SDA-INSIDEX-WEB/pages/Andata_Ritorno_it/136" title="Andata &amp;amp; ritorno" target="_self"><span class="ixLabel">Andata&#xA0;&amp; ritorno</span></a></li>
<li class="ixUnselected" id="ixMenuNode_175"><a href="/SITO_SDA-INSIDEX-WEB/pages/2RuotExpress_it/175" title="2RuotExpress" target="_self"><span class="ixLabel">2RuotExpress</span></a></li>
<li class="ixUnselected" id="ixMenuNode_137"><a href="/SITO_SDA-INSIDEX-WEB/pages/Capi_Appesi_it/137" title="Capi appesi" target="_self"><span class="ixLabel">Capi appesi</span></a></li>
<li class="ixUnselected" id="ixMenuNode_138"><a href="/SITO_SDA-INSIDEX-WEB/pages/Pharmaexpress_it/138" title="Pharmaexpress" target="_self"><span class="ixLabel">Pharmaexpress</span></a></li>
  <li class="ixUnselected" id="ixMenuNode_140"><a href="/SITO_SDA-INSIDEX-WEB/pages/Servizi_Accessori_it/134" title="* Servizi accessori *" target="_self"><span class="ixLabel">* Servizi accessori *</span></a></li>
</ul>
</li>
<li class="ixHasChildren ixUnselected" id="ixMenuNode_134"><a href="/SITO_SDA-INSIDEX-WEB/pages/Servizi_Accessori_it/134" title="Accessori" target="_self"><span class="ixLabel"><strong>Accessori</strong></span></a>
  <ul>
  <li class="ixHasChildren ixUnselected" id="ixMenuNode_150"><a href="/SITO_SDA-INSIDEX-WEB/pages/Comodita_di_consegna_it/150" title="Comodit&amp;agrave; di consegna" target="_self"><span class="ixLabel">Comodit&#xE0; di consegna</span></a>
<ul>
<li class="ixUnselected" id="ixMenuNode_154"><a href="/SITO_SDA-INSIDEX-WEB/pages/Al_Piano_it/154" title="Al Piano" target="_self"><span class="ixLabel">Al Piano</span></a></li>
<li class="ixUnselected" id="ixMenuNode_155"><a href="/SITO_SDA-INSIDEX-WEB/pages/Su_Appuntamento_it/155" title="Su Appuntamento" target="_self"><span class="ixLabel">Su Appuntamento</span></a></li>
<li class="ixUnselected" id="ixMenuNode_156"><a href="/SITO_SDA-INSIDEX-WEB/pages/Di_Sabato_it/156" title="Di Sabato" target="_self"><span class="ixLabel">Di Sabato</span></a></li>
<li class="ixUnselected" id="ixMenuNode_157"><a href="/SITO_SDA-INSIDEX-WEB/pages/Di_Sera_it/157" title="Di Sera" target="_self"><span class="ixLabel">Di Sera</span></a></li>
<li class="ixUnselected" id="ixMenuNode_158"><a href="/SITO_SDA-INSIDEX-WEB/pages/Fermo_Deposito_it/158" title="Fermo Deposito" target="_self"><span class="ixLabel">Fermo Deposito</span></a></li>
</ul>
</li>
<li class="ixHasChildren ixUnselected" id="ixMenuNode_151"><a href="/SITO_SDA-INSIDEX-WEB/pages/Puntualita_it/151" title="Puntualit&amp;agrave;" target="_self"><span class="ixLabel">Puntualit&#xE0;</span></a>
<ul>
<li class="ixUnselected" id="ixMenuNode_159"><a href="/SITO_SDA-INSIDEX-WEB/pages/Time_Definite_it/170" title="Time Definite" target="_self"><span class="ixLabel">Time Definite</span></a></li>
<li class="ixUnselected" id="ixMenuNode_160"><a href="/SITO_SDA-INSIDEX-WEB/pages/Su_Appuntamento_it/155" title="Su Appuntamento" target="_self"><span class="ixLabel">Su Appuntamento</span></a></li>
</ul>
</li>
<li class="ixHasChildren ixUnselected" id="ixMenuNode_152"><a href="/SITO_SDA-INSIDEX-WEB/pages/Valore_it/152" title="Valore" target="_self"><span class="ixLabel">Valore</span></a>
  <ul>
  <li class="ixUnselected" id="ixMenuNode_161"><a href="/SITO_SDA-INSIDEX-WEB/pages/Contrassegno_it/161" title="Contrassegno" target="_self"><span class="ixLabel">Contrassegno</span></a></li>
  <li class="ixUnselected" id="ixMenuNode_162"><a href="/SITO_SDA-INSIDEX-WEB/pages/Assicurazione_it/162" title="Assicurazione" target="_self"><span class="ixLabel">Assicurazione</span></a></li>
  <li class="ixUnselected" id="ixMenuNode_163"><a href="/SITO_SDA-INSIDEX-WEB/pages/Copertura_Basic_it/163" title="Copertura Basic" target="_self"><span class="ixLabel">Copertura Basic</span></a></li>
</ul>
</li>
<li class="ixHasChildren ixUnselected" id="ixMenuNode_153"><a href="/SITO_SDA-INSIDEX-WEB/pages/Controllo_it/153" title="Controllo" target="_self"><span class="ixLabel">Informazione</span></a>
  <ul>
  <li class="ixHasChildren ixUnselected" id="ixMenuNode_164"><a href="/SITO_SDA-INSIDEX-WEB/pages/Smart_Alert/164" title="Smart Alert" target="_self"><span class="ixLabel">Smart Alert</span></a></li>
<li class="ixUnselected" id="ixMenuNode_165"><a href="/SITO_SDA-INSIDEX-WEB/pages/Prova_di_Consegna_it/165" title="Prova di Consegna" target="_self"><span class="ixLabel">Prova di Consegna</span></a></li>
<li class="ixUnselected" id="ixMenuNode_166"><a href="/SITO_SDA-INSIDEX-WEB/pages/Digipod_it/166" title="Digipod" target="_self"><span class="ixLabel">Digipod</span></a></li>
  <li class="ixUnselected" id="ixMenuNode_167"><a href="/SITO_SDA-INSIDEX-WEB/pages/Recall_Remail_it/167" title="Re-call e Re-mail" target="_self"><span class="ixLabel">Re-call e Re-mail</span></a></li>
</ul>
</li>
<li class="ixHasChildren ixUnselected" id="ixMenuNode_375"><a href="/SITO_SDA-INSIDEX-WEB/pages/Programmazione_it/375" title="Programmazione" target="_self"><span class="ixLabel">Programmazione</span></a>
  <ul>
  <li class="ixUnselected" id="ixMenuNode_412"><a href="/SITO_SDA-INSIDEX-WEB/pages/Riconsegna_su_Appuntamento_it/375" target="_self"><span class="ixLabel">Riconsegna su Appuntamento</span></a></li>
<li class="ixUnselected" id="ixMenuNode_376"><a href="/SITO_SDA-INSIDEX-WEB/pages/Nuovo_accessorio_A_Giorno_Orario_Definito_it/376" title="A Giorno-Orario Definito" target="_self"><span class="ixLabel">A Giorno-Orario Definito</span></a></li>
</ul>
</li>
<li class="ixUnselected" id="ixMenuNode_384"><a href="/SITO_SDA-INSIDEX-WEB/pages/Bottiglie_protette_e_sicure_nel_network_SDA_it/384" title="Imballi per bottiglie" target="_self"><span class="ixLabel">Imballi per bottiglie</span></a></li>
</ul>
</li>
<li class="ixUnselected" id="ixMenuNode_145"><a href="/SITO_SDA-INSIDEX-WEB/pages/Footer_en/145" title="kipoint" target="_self"><span class="ixLabel">kipoint</span></a></li>
  <li class="ixUnselected" id="ixMenuNode_147"><a href="/SITO_SDA-INSIDEX-WEB/index.jsp?ixPageId=114&amp;ixMenuId=437" title="contatto commerciale" target="_self"><span class="ixLabel">contatto commerciale</span></a></li>
<li class="ixUnselected" id="ixMenuNode_146"><a href="/SITO_SDA-INSIDEX-WEB/pages/Footer_en/146" title="App SDA" target="_blank"><span class="ixLabel">App SDA</span></a></li>
</ul>
</li>
<li class="ixHasChildren ixUnselected" id="ixMenuNode_111"><a href="/SITO_SDA-INSIDEX-WEB/pages/Strumenti_on_line_it/111" title="Strumenti on-line" target="_self"><span class="ixLabel">Strumenti online</span></a>
<ul>
<li class="ixUnselected" id="ixMenuNode_206"><a href="/SITO_SDA-INSIDEX-WEB/pages/RICERCA_SPEDIZIONI_O_TRACKING_it/188" title="Ricerca spedizioni" target="_self"><span class="ixLabel">Ricerca spedizioni</span></a></li>
<li class="ixUnselected" id="ixMenuNode_207"><a href="/SITO_SDA-HTML-WEB/filiale_virtuale/frm_ritiri_scelta.htm" title="Richiesta ritiri" target="_self"><span class="ixLabel">Richiesta ritiri</span></a></li>
<li class="ixUnselected" id="ixMenuNode_208"><a href="/SITO_SDA-WEB/dispatcher?execute2=ActionTracking.doGetTrackingViaIdRitiro&amp;id_ritiro" title="Verifica ritiri" target="_self"><span class="ixLabel">Verifica ritiri</span></a></li>
<li class="ixUnselected" id="ixMenuNode_414"><a href="/SITO_SDA-WEB/dispatcher?execute2=ActionTracking.doGetDisattivaRitiro" target="_self"><span class="ixLabel">Annulla ritiri</span></a></li>
<li class="ixUnselected" id="ixMenuNode_209"><a href="/SITO_SDA-WEB/dispatcher?execute2=ActionFiliali.doGetSvincoloGiacenzeOnlineService" title="Svincolo spedizioni" target="_self"><span class="ixLabel">Svincolo spedizioni</span></a></li>
<li class="ixUnselected" id="ixMenuNode_210"><a href="/SITO_SDA-WEB/dispatcher?execute2=ActionFiliali.doGetSigleFilLoc&amp;Invoker=sda_LocalitaGolden" title="Ricerca filiali" target="_self"><span class="ixLabel">Ricerca filiali</span></a></li>
<li class="ixUnselected" id="ixMenuNode_211"><a href="/SITO_SDA-WEB/dispatcher?execute2=ActionRitiri.doMateriale" title="Richiesta materiali" target="_self"><span class="ixLabel">Richiesta materiali</span></a></li>
<li class="ixUnselected" id="ixMenuNode_212"><a href="/SITO_SDA-WEB/dispatcher?execute2=ActionFiliali.doGetSigleNew&amp;Invoker=sda_LocalitaGolden" title="Tempi di consegna" target="_self"><span class="ixLabel">Tempi di consegna</span></a></li>
<li class="ixUnselected" id="ixMenuNode_213"><a href="/SITO_SDA-INSIDEX-WEB/pages/Fattura_online_it/213" title="Fattura on-line" target="_self"><span class="ixLabel">Fattura on-line</span></a></li>
<li class="ixUnselected" id="ixMenuNode_214"><a href="http://www.poste.it/online/cercacap/home.do" title="Cerca CAP" target="_blank"><span class="ixLabel">Cerca CAP</span></a></li>
<li class="ixUnselected" id="ixMenuNode_215"><a href="/SITO_SDA-INSIDEX-WEB/pages/Richiesta_Modifica_Dati_Anagrafici_it/215" title="Modifica dati anagrafici" target="_self"><span class="ixLabel">Modifica dati anagrafici</span></a></li>
<li class="ixUnselected" id="ixMenuNode_216"><a href="/SITO_SDA-INSIDEX-WEB/pages/Footer_en/216" title="kipoint" target="_self"><span class="ixLabel">kipoint</span></a></li>
  <li class="ixUnselected" id="ixMenuNode_218"><a href="/SITO_SDA-INSIDEX-WEB/index.jsp?ixPageId=114&amp;ixMenuId=437" title="contatto commerciale" target="_self"><span class="ixLabel">contatto commerciale</span></a></li>
<li class="ixUnselected" id="ixMenuNode_217"><a href="/SITO_SDA-INSIDEX-WEB/pages/Footer_en/217" title="App SDA" target="_blank"><span class="ixLabel">App SDA</span></a></li>
</ul>
</li>
<li class="ixHasChildren ixUnselected" id="ixMenuNode_222"><a href="/SITO_SDA-INSIDEX-WEB/pages/mySDA_it/243" target="_self"><span class="ixLabel">mySDA 2.0</span></a>
<ul>
<li class="ixUnselected" id="ixMenuNode_243"><a href="/SITO_SDA-INSIDEX-WEB/pages/mySDA_it/243" title="Cos&apos;&#xE8; mySDA?" target="_self"><span class="ixLabel">Cos&apos;&#xFFFD;? mySDA?</span></a></li>
<li class="ixUnselected" id="ixMenuNode_242"><a href="/SITO_SDA-INSIDEX-WEB/pages/FAQ_mySDA_it/242" title="FAQ mySDA" target="_self"><span class="ixLabel">FAQ mySDA</span></a></li>
</ul>
</li>
<li class="ixHasChildren ixUnselected" id="ixMenuNode_112"><a href="/SITO_SDA-INSIDEX-WEB/pages/Soluzioni_tecnologiche_it/112" title="Soluzioni tecnologiche" target="_self"><span class="ixLabel">Soluzioni tecnologiche</span></a>
<ul>
<li class="ixUnselected" id="ixMenuNode_223"><a href="/SITO_SDA-INSIDEX-WEB/pages/SDAEWB_e_SDAWEB_Basic_it/223" target="_self"><span class="ixLabel">SDAWEB e SDAWEB Basic</span></a></li>
<li class="ixUnselected" id="ixMenuNode_224"><a href="/SITO_SDA-INSIDEX-WEB/pages/INVIOWEB_it/224" target="_self"><span class="ixLabel">INVIOWEB</span></a></li>
  <li class="ixUnselected" id="ixMenuNode_415"><a href="/SITO_SDA-INSIDEX-WEB/pages/invioeasy_it/415" target="_self"><span class="ixLabel">INVIOEASY</span></a></li>
  <li class="ixUnselected" id="ixMenuNode_226"><a href="/SITO_SDA-INSIDEX-WEB/pages/INVIOFILE_E_INVIOSYSTEM_it/226" target="_self"><span class="ixLabel">INVIOFILE E INVIOSYSTEM</span></a></li>
<li class="ixUnselected" id="ixMenuNode_445"><a href="/SITO_SDA-INSIDEX-WEB/pages/Webservices__it/445" target="_self"><span class="ixLabel">WEBSERVICES</span></a></li>
  <li class="ixUnselected" id="ixMenuNode_219"><a href="/SITO_SDA-INSIDEX-WEB/pages/Footer_en/219" title="kipoint" target="_self"><span class="ixLabel">kipoint</span></a></li>
  <li class="ixUnselected" id="ixMenuNode_221"><a href="/SITO_SDA-INSIDEX-WEB/index.jsp?ixPageId=114&amp;ixMenuId=437" title="contatto commerciale" target="_self"><span class="ixLabel">contatto commerciale</span></a></li>
<li class="ixUnselected" id="ixMenuNode_220"><a href="/SITO_SDA-INSIDEX-WEB/pages/Footer_en/220" title="App SDA" target="_blank"><span class="ixLabel">App SDA</span></a></li>
</ul>
</li>
<li class="ixHasChildren ixUnselected" id="ixMenuNode_446"><a href="/SITO_SDA-INSIDEX-WEB/pages/Servizi_Logistici_it/446" title="Servizi Logistici" target="_self"><span class="ixLabel">Servizi Logistici</span></a>
<ul>
<li class="ixUnselected" id="ixMenuNode_447"><a href="/SITO_SDA-INSIDEX-WEB/pages/Logistica_Integrata_it/447" title="Logistica Integrata" target="_self"><span class="ixLabel">Logistica Integrata</span></a></li>
<li class="ixUnselected" id="ixMenuNode_448"><a href="/SITO_SDA-INSIDEX-WEB/pages/Technical_Courier_it/448" title="Technical Courier" target="_self"><span class="ixLabel">Technical Courier</span></a></li>
<li class="ixUnselected" id="ixMenuNode_450"><a href="/SITO_SDA-INSIDEX-WEB/pages/Legatoria_it/450" title="Legatoria" target="_self"><span class="ixLabel">Legatoria</span></a></li>
  <li class="ixUnselected" id="ixMenuNode_452"><a href="/SITO_SDA-INSIDEX-WEB/pages/Footer_en/452" target="_self"><span class="ixLabel">kipoint</span></a></li>
  <li class="ixUnselected" id="ixMenuNode_454"><a href="/SITO_SDA-INSIDEX-WEB/index.jsp?ixPageId=114&amp;ixMenuId=437" title="Contatto Commerciale" target="_self"><span class="ixLabel">Contatto Commerciale</span></a></li>
<li class="ixUnselected" id="ixMenuNode_453"><a href="/SITO_SDA-INSIDEX-WEB/pages/Footer_en/453" title="App SDA" target="_self"><span class="ixLabel">App SDA</span></a></li>
</ul>
</li>
<li class="ixHasChildren ixUnselected" id="ixMenuNode_239"><a href="/SITO_SDA-INSIDEX-WEB/pages/Assistenza_on_line_it/239" target="_self"><span class="ixLabel">Assistenza online</span></a>
<ul>
<li class="ixUnselected" id="ixMenuNode_436"><a href="/SITO_SDA-INSIDEX-WEB/pages/Assistenza_on_line_it/239" title="Modulo assistenza" target="_self"><span class="ixLabel">Modulo assistenza</span></a></li>
<li class="ixUnselected" id="ixMenuNode_433"><a href="/SITO_SDA-INSIDEX-WEB/pages/Footer_en/239" title="skype" target="_self"><span class="ixLabel">Skype</span></a></li>
  <li class="ixUnselected" id="ixMenuNode_435"><a href="/SITO_SDA-INSIDEX-WEB/pages/Procedura_di_Conciliazione_it/239" title="Conciliazione" target="_self"><span class="ixLabel">Conciliazione</span></a></li>
  <li class="ixUnselected" id="ixMenuNode_434"><a href="/SITO_SDA-INSIDEX-WEB/pages/FAQ_Assistenza_it/239" title="faq" target="_self"><span class="ixLabel">FAQ</span></a></li>
  </ul>
  </li>
  <li class="ixUnselected" id="ixMenuNode_238"><a href="/SITO_SDA-INSIDEX-WEB/pages/News_it/127" title="NEWS" target="_self"><span class="ixLabel">NEWS</span></a></li>
  <li class="ixUnselected" id="ixMenuNode_441"><a href="/SITO_SDA-INSIDEX-WEB/pages/Condizioni_Generali_di_Trasporto_it/117" title="Carta della qualit&amp;agrave;" target="_self"><span class="ixLabel">Carta della qualit&#xE0;</span></a></li>
<li class="ixUnselected" id="ixMenuNode_117"><a href="/SITO_SDA-INSIDEX-WEB/pages/Condizioni_Generali_di_Trasporto_it/117" title="Condizioni Genenerali di Trasporto e allegato servizi" target="_self"><span class="ixLabel">Condizioni Genenerali di Trasporto e allegato servizi</span></a></li>
<li class="ixUnselected" id="ixMenuNode_118"><a href="/SITO_SDA-INSIDEX-WEB/pages/Addendum_Soluzioni_Tecnologiche_it/118" title="Addendum Soluzioni Tecnologiche" target="_self"><span class="ixLabel">Addendum Soluzioni Tecnologiche</span></a></li>
</ul>
</li>
<li class="ixHasChildren ixOpen" id="ixMenuNode_102"><a href="/SITO_SDA-INSIDEX-WEB/pages/Home_en_ok/228" title="English version" target="_self"><span class="ixLabel">English</span></a>
  <ul>
  <li class="ixUnselected" id="ixMenuNode_271"><a href="/SITO_SDA-INSIDEX-WEB/pages/Home_it/119" title="Italian Version" target="_self"><span class="ixLabel">Italian Version</span></a></li>
<li class="ixSelected" id="ixMenuNode_228"><a href="/SITO_SDA-INSIDEX-WEB/pages/Home_en_ok/102" title="Home Page" target="_self"><span class="ixLabel">Home</span></a>
  <ul>
  <li class="ixUnselected" id="ixMenuNode_377"><a href="/SITO_SDA-INSIDEX-WEB/pages/Online_Billing_en/294" target="_self"><span class="ixLabel">Attiva gratis la fattuta online</span></a></li>
<li class="ixUnselected" id="ixMenuNode_378"><a href="/SITO_SDA-INSIDEX-WEB/pages/UN_SERVIZIO_ANCORA_PIU_SMART_it/378" title="App SDA" target="_self"><span class="ixLabel">App SDA</span></a></li>
<li class="ixUnselected" id="ixMenuNode_379"><a href="http://www.kipoint.it" target="_blank"><span class="ixLabel">kipoint</span></a></li>
  </ul>
  </li>
  <li class="ixHasChildren ixUnselected" id="ixMenuNode_264"><a href="/SITO_SDA-INSIDEX-WEB/pages/About_us_en/264" title="About us" target="_self"><span class="ixLabel">About us</span></a>
<ul>
<li class="ixUnselected" id="ixMenuNode_274"><a href="/SITO_SDA-INSIDEX-WEB/pages/Our_Company_en/274" title="Our company" target="_self"><span class="ixLabel">Our company</span></a></li>
<li class="ixUnselected" id="ixMenuNode_275"><a href="/SITO_SDA-INSIDEX-WEB/pages/Statutory_Information_en/275" title="Statutory Information" target="_self"><span class="ixLabel">Statutory Information</span></a></li>
<li class="ixUnselected" id="ixMenuNode_276"><a href="/SITO_SDA-INSIDEX-WEB/pages/Quality_en/276" title="Quality" target="_self"><span class="ixLabel">Quality</span></a></li>
  <li class="ixUnselected" id="ixMenuNode_277"><a href="/SITO_SDA-INSIDEX-WEB/pages/Work_with_us_en/277" title="Work with us" target="_self"><span class="ixLabel">Work with us</span></a></li>
<li class="ixUnselected" id="ixMenuNode_388"><a href="/SITO_SDA-INSIDEX-WEB/pages/Online_Billing_en/294" target="_self"><span class="ixLabel">Attiva gratis la fattuta online</span></a></li>
<li class="ixUnselected" id="ixMenuNode_389"><a href="/SITO_SDA-INSIDEX-WEB/pages/UN_SERVIZIO_ANCORA_PIU_SMART_it/389" target="_self"><span class="ixLabel">App SDA</span></a></li>
<li class="ixUnselected" id="ixMenuNode_390"><a href="http://www.kipoint.it" target="_blank"><span class="ixLabel">kipoint</span></a></li>
  </ul>
  </li>
  <li class="ixHasChildren ixUnselected" id="ixMenuNode_265"><a href="/SITO_SDA-INSIDEX-WEB/pages/How_to_send_en/265" title="How to send" target="_self"><span class="ixLabel">How to send</span></a>
<ul>
<li class="ixHasChildren ixUnselected" id="ixMenuNode_280"><a href="/SITO_SDA-INSIDEX-WEB/pages/Sending_in_Italy_en/280" title="Sending in Italy" target="_self"><span class="ixLabel">Sending in Italy</span></a>
  <ul>
  <li class="ixUnselected" id="ixMenuNode_288"><a href="/SITO_SDA-INSIDEX-WEB/pages/Waybill_en/288" title="Waybill" target="_self"><span class="ixLabel">Waybill</span></a></li>
  <li class="ixUnselected" id="ixMenuNode_289"><a href="/SITO_SDA-INSIDEX-WEB/pages/Pickup_en/289" title="Pickup" target="_self"><span class="ixLabel">Pickup</span></a></li>
  <li class="ixUnselected" id="ixMenuNode_290"><a href="/SITO_SDA-INSIDEX-WEB/pages/Preparing_a_shipment_en/290" title="Preparing a shipment" target="_self"><span class="ixLabel">Preparing a shipment</span></a></li>
<li class="ixUnselected" id="ixMenuNode_291"><a href="/SITO_SDA-INSIDEX-WEB/pages/Delivery_en/291" title="Delivery" target="_self"><span class="ixLabel">Delivery</span></a></li>
  <li class="ixUnselected" id="ixMenuNode_292"><a href="/SITO_SDA-INSIDEX-WEB/pages/Tracking_of_shipments_en/292" title="Tracking of shipments" target="_self"><span class="ixLabel">Tracking of shipments</span></a></li>
<li class="ixUnselected" id="ixMenuNode_293"><a href="/SITO_SDA-INSIDEX-WEB/pages/Restrictions_en/293" title="Restrictions" target="_self"><span class="ixLabel">Restrictions</span></a></li>
  <li class="ixUnselected" id="ixMenuNode_294"><a href="/SITO_SDA-INSIDEX-WEB/pages/Online_Billing_en/294" title="Online billing" target="_self"><span class="ixLabel">Online billing</span></a></li>
<li class="ixUnselected" id="ixMenuNode_295"><a href="/SITO_SDA-INSIDEX-WEB/pages/Carriage_Forward_en/295" title="Carriage forward" target="_self"><span class="ixLabel">Carriage forward</span></a></li>
<li class="ixUnselected" id="ixMenuNode_296"><a href="/SITO_SDA-INSIDEX-WEB/pages/Additional_waybills_en/296" title="Additional waybills" target="_self"><span class="ixLabel">Additional waybills</span></a></li>
</ul>
</li>
<li class="ixHasChildren ixUnselected" id="ixMenuNode_281"><a href="/SITO_SDA-INSIDEX-WEB/pages/Sending_abroad_en/281" title="Sending abroad" target="_self"><span class="ixLabel">Sending abroad</span></a>
<ul>
<li class="ixHasChildren ixUnselected" id="ixMenuNode_297"><a href="/SITO_SDA-INSIDEX-WEB/pages/Footer_en/297" title="INTERNATIONAL EXPRESS" target="_self"><span class="ixLabel">INTERNATIONAL EXPRESS</span></a>
<ul>
<li class="ixUnselected" id="ixMenuNode_299"><a href="/SITO_SDA-INSIDEX-WEB/pages/International_waybill_en/299" title="International waybill" target="_self"><span class="ixLabel">International waybill</span></a></li>
<li class="ixUnselected" id="ixMenuNode_300"><a href="/SITO_SDA-INSIDEX-WEB/pages/Packaging_en/300" title="Packaging" target="_self"><span class="ixLabel">Packaging</span></a></li>
  <li class="ixUnselected" id="ixMenuNode_301"><a href="/SITO_SDA-INSIDEX-WEB/pages/Preparing_a_shipment_en/301" title="Preparing a shipment" target="_self"><span class="ixLabel">Preparing a shipment</span></a></li>
<li class="ixUnselected" id="ixMenuNode_302"><a href="/SITO_SDA-INSIDEX-WEB/pages/Customs_Documentation_en/302" title="Customs Documentation" target="_self"><span class="ixLabel">Customs Documentation</span></a></li>
<li class="ixUnselected" id="ixMenuNode_303"><a href="/SITO_SDA-INSIDEX-WEB/pages/Guide_to_compiling_the_Commercial_or_Proforma_Invoice_en/303" title="Guide to compiling the Commercial or Proforma Invoice" target="_self"><span class="ixLabel">Guide to compiling the Commercial or Proforma Invoice</span></a></li>
<li class="ixUnselected" id="ixMenuNode_305"><a href="/SITO_SDA-INSIDEX-WEB/pages/Rates_and_charges_en/305" title="Rates and charges" target="_self"><span class="ixLabel">Rates and charges</span></a></li>
<li class="ixUnselected" id="ixMenuNode_304"><a href="/SITO_SDA-INSIDEX-WEB/pages/Restrictions_en/304" title="Restrictions" target="_self"><span class="ixLabel">Restrictions</span></a></li>
  </ul>
  </li>
  <li class="ixHasChildren ixUnselected" id="ixMenuNode_298"><a href="/SITO_SDA-INSIDEX-WEB/pages/Footer_en/298" title="DEFERRED ROADEUROPE" target="_self"><span class="ixLabel">DEFERRED ROADEUROPE</span></a>
<ul>
<li class="ixUnselected" id="ixMenuNode_306"><a href="/SITO_SDA-INSIDEX-WEB/pages/roadEUROPE_waybill_en/306" title="roadEUROPE waybill" target="_self"><span class="ixLabel">roadEUROPE waybill</span></a></li>
<li class="ixUnselected" id="ixMenuNode_307"><a href="/SITO_SDA-INSIDEX-WEB/pages/Preparing_a_shipment_en/307" title="Preparing a shipment" target="_self"><span class="ixLabel">Preparing a shipment</span></a></li>
<li class="ixUnselected" id="ixMenuNode_308"><a href="/SITO_SDA-INSIDEX-WEB/pages/roadEUROPE_customs_help_en/308" title="Customs help" target="_self"><span class="ixLabel">Customs help</span></a></li>
<li class="ixUnselected" id="ixMenuNode_309"><a href="/SITO_SDA-INSIDEX-WEB/pages/Guide_to_compiling_the_Commercial_or_Proforma_Invoice_en/309" title="Guide to compiling the Commercial or Proforma Invoice" target="_self"><span class="ixLabel">Guide to compiling the Commercial or Proforma Invoice</span></a></li>
<li class="ixUnselected" id="ixMenuNode_310"><a href="/SITO_SDA-INSIDEX-WEB/pages/Rates_and_charges_roadeurope_en/310" title="Rates and charges" target="_self"><span class="ixLabel">Rates and charges</span></a></li>
<li class="ixUnselected" id="ixMenuNode_311"><a href="/SITO_SDA-INSIDEX-WEB/pages/Restrictions_en/311" title="Restrictions" target="_self"><span class="ixLabel">Restrictions</span></a></li>
  </ul>
  </li>
  </ul>
  </li>
  <li class="ixHasChildren ixUnselected" id="ixMenuNode_282"><a href="/SITO_SDA-INSIDEX-WEB/pages/Surcharges_en/282" title="Surcharges" target="_self"><span class="ixLabel">Surcharges</span></a>
  <ul>
  <li class="ixUnselected" id="ixMenuNode_284"><a href="/SITO_SDA-INSIDEX-WEB/pages/Fuel_en/284" title="Fuel" target="_self"><span class="ixLabel">Fuel</span></a></li>
  <li class="ixUnselected" id="ixMenuNode_287"><a href="/SITO_SDA-INSIDEX-WEB/pages/Sicily_Calabria_Sardinia_en/287" title="Sicily-Calabria-Sardinia" target="_self"><span class="ixLabel">Sicily-Calabria-Sardinia</span></a></li>
  <li class="ixUnselected" id="ixMenuNode_286"><a href="/SITO_SDA-INSIDEX-WEB/pages/Remote_locations_Peripheral_Locations__en/286" title="Remote locations/Peripheral Locations" target="_self"><span class="ixLabel">Remote locations/Peripheral Locations</span></a></li>
<li class="ixUnselected" id="ixMenuNode_421"><a href="/SITO_SDA-INSIDEX-WEB/pages/d_en/421" target="_self"><span class="ixLabel">Carriage Forward </span></a></li>
<li class="ixUnselected" id="ixMenuNode_285"><a href="/SITO_SDA-INSIDEX-WEB/pages/Over_maximum_limits_en/285" title="Over maximum limits" target="_self"><span class="ixLabel">Over maximum limits</span></a></li>
<li class="ixUnselected" id="ixMenuNode_423"><a href="/SITO_SDA-INSIDEX-WEB/pages/Outsized_Irregularly_Shaped_Items__en/423" title="Outsized/Irregularly Shaped Items" target="_self"><span class="ixLabel">Outsized/Irregularly Shaped Items </span></a></li>
<li class="ixUnselected" id="ixMenuNode_424"><a href="/SITO_SDA-INSIDEX-WEB/pages/Non_Stackable_Items__en/424" title="Non-Stackable Items " target="_self"><span class="ixLabel">Non-Stackable Items </span></a></li>
</ul>
</li>
<li class="ixUnselected" id="ixMenuNode_283"><a href="/SITO_SDA-INSIDEX-WEB/pages/Storage_Management_en/283" title="Storage management" target="_self"><span class="ixLabel">Storage management</span></a></li>
<li class="ixUnselected" id="ixMenuNode_391"><a href="/SITO_SDA-INSIDEX-WEB/pages/Online_Billing_en/294" target="_self"><span class="ixLabel">Attiva gratis la fattuta online</span></a></li>
<li class="ixUnselected" id="ixMenuNode_395"><a href="/SITO_SDA-INSIDEX-WEB/pages/UN_SERVIZIO_ANCORA_PIU_SMART_it/395" target="_self"><span class="ixLabel">App SDA</span></a></li>
<li class="ixUnselected" id="ixMenuNode_399"><a href="http://www.kipoint.it" target="_blank"><span class="ixLabel">kipoint</span></a></li>
  </ul>
  </li>
  <li class="ixHasChildren ixUnselected" id="ixMenuNode_266"><a href="/SITO_SDA-INSIDEX-WEB/pages/Services_en/266" title="Shipping services" target="_self"><span class="ixLabel">Shipping services</span></a>
<ul>
<li class="ixHasChildren ixUnselected" id="ixMenuNode_323"><a href="/SITO_SDA-INSIDEX-WEB/pages/Time_Definite_Services_en/323" title="Time Definite" target="_self"><span class="ixLabel">Time Definite</span></a>
<ul>
<li class="ixUnselected" id="ixMenuNode_330"><a href="/SITO_SDA-INSIDEX-WEB/pages/Time_Definite_en/330" title="Time Definite" target="_self"><span class="ixLabel">Time Definite</span></a></li>
<li class="ixUnselected" id="ixMenuNode_331"><a href="/SITO_SDA-INSIDEX-WEB/pages/Golden_Service_en/331" title="Golden Service" target="_self"><span class="ixLabel">Golden Service</span></a></li>
</ul>
</li>
<li class="ixHasChildren ixUnselected" id="ixMenuNode_324"><a href="/SITO_SDA-INSIDEX-WEB/pages/Express_Services_en/324" title="Express Services" target="_self"><span class="ixLabel">Express Services</span></a>
<ul>
<li class="ixHasChildren ixUnselected" id="ixMenuNode_332"><a href="/SITO_SDA-INSIDEX-WEB/pages/Express_Services_en/332" title="Domestic Services" target="_self"><span class="ixLabel">Domestic Services</span></a>
<ul>
<li class="ixUnselected" id="ixMenuNode_334"><a href="/SITO_SDA-INSIDEX-WEB/pages/03_015_030_en/334" title="0-3, 0-15, 0-30" target="_self"><span class="ixLabel">0-3, 0-15, 0-30</span></a></li>
<li class="ixUnselected" id="ixMenuNode_335"><a href="/SITO_SDA-INSIDEX-WEB/pages/Extralarge_en/335" title="Extralarge" target="_self"><span class="ixLabel">Extralarge</span></a></li>
  <li class="ixUnselected" id="ixMenuNode_336"><a href="/SITO_SDA-INSIDEX-WEB/pages/Mototaxi_en/336" title="Mototaxi" target="_self"><span class="ixLabel">Mototaxi</span></a></li>
  <li class="ixUnselected" id="ixMenuNode_337"><a href="/SITO_SDA-INSIDEX-WEB/pages/Servizi_Accessori_en/337" title="* Extra Services *" target="_self"><span class="ixLabel">* Extra Services *</span></a></li>
</ul>
</li>
<li class="ixHasChildren ixUnselected" id="ixMenuNode_333"><a href="/SITO_SDA-INSIDEX-WEB/pages/International_Service_en/338" title="International Services" target="_self"><span class="ixLabel">International Services</span></a>
<ul>
<li class="ixUnselected" id="ixMenuNode_338"><a href="/SITO_SDA-INSIDEX-WEB/pages/International_Service_en/338" title="International Service" target="_self"><span class="ixLabel">International Service</span></a></li>
</ul>
</li>
<li class="ixUnselected" id="ixMenuNode_339"><a href="/SITO_SDA-INSIDEX-WEB/pages/Raccomandata_en/325" title="Raccomandata" target="_self"><span class="ixLabel">Raccomandata</span></a>
  <ul>
  <li class="ixUnselected" id="ixMenuNode_342"><a href="/SITO_SDA-INSIDEX-WEB/pages/Footer_en/342" title="Economy" target="_self"><span class="ixLabel">Economy</span></a></li>
  </ul>
  </li>
  <li class="ixHasChildren ixUnselected" id="ixMenuNode_341"><a href="/SITO_SDA-INSIDEX-WEB/pages/Deferred_Services_en/345" title="International Deferred" target="_self"><span class="ixLabel">International Deferred</span></a>
<ul>
<li class="ixUnselected" id="ixMenuNode_343"><a href="/SITO_SDA-INSIDEX-WEB/pages/roadEUROPE_en/343" title="roadEUROPE" target="_self"><span class="ixLabel">roadEUROPE</span></a></li>
  <li class="ixUnselected" id="ixMenuNode_405"><a href="/SITO_SDA-INSIDEX-WEB/pages/ExportBox_en/405" title="ExportBox" target="_self"><span class="ixLabel">Export Box</span></a></li>
</ul>
</li>
</ul>
</li>
<li class="ixHasChildren ixUnselected" id="ixMenuNode_327"><a href="/SITO_SDA-INSIDEX-WEB/pages/International_Services_en/327" title="International Services" target="_self"><span class="ixLabel">International Services</span></a>
<ul>
<li class="ixHasChildren ixUnselected" id="ixMenuNode_344"><a href="/SITO_SDA-INSIDEX-WEB/pages/International_Service_en/346" title="Express" target="_self"><span class="ixLabel">Express</span></a>
  <ul>
  <li class="ixUnselected" id="ixMenuNode_346"><a href="/SITO_SDA-INSIDEX-WEB/pages/International_Service_en/346" title="International Service" target="_self"><span class="ixLabel">International Service</span></a></li>
</ul>
</li>
<li class="ixHasChildren ixUnselected" id="ixMenuNode_345"><a href="/SITO_SDA-INSIDEX-WEB/pages/roadEUROPE_en/347" title="Deferred" target="_self"><span class="ixLabel">Deferred</span></a>
  <ul>
  <li class="ixUnselected" id="ixMenuNode_347"><a href="/SITO_SDA-INSIDEX-WEB/pages/roadEUROPE_en/347" title="roadEUROPE" target="_self"><span class="ixLabel">roadEUROPE</span></a></li>
  </ul>
  </li>
  </ul>
  </li>
  <li class="ixHasChildren ixUnselected" id="ixMenuNode_328"><a href="/SITO_SDA-INSIDEX-WEB/pages/Specialist_Services_en/328" title="Specialist Services" target="_self"><span class="ixLabel">Specialist Services</span></a>
<ul>
<li class="ixUnselected" id="ixMenuNode_348"><a href="/SITO_SDA-INSIDEX-WEB/pages/Dedicated_en/348" title="Dedicated" target="_self"><span class="ixLabel">Dedicated</span></a></li>
  <li class="ixUnselected" id="ixMenuNode_349"><a href="/SITO_SDA-INSIDEX-WEB/pages/Extranetwork_en/349" title="Extranetwork" target="_self"><span class="ixLabel">Extranetwork</span></a></li>
  <li class="ixUnselected" id="ixMenuNode_350"><a href="/SITO_SDA-INSIDEX-WEB/pages/Andata_e_Ritorno_en/350" title="Andata e ritorno (SWAP)" target="_self"><span class="ixLabel">Andata e ritorno (SWAP)</span></a></li>
<li class="ixUnselected" id="ixMenuNode_353"><a href="/SITO_SDA-INSIDEX-WEB/pages/2RuotExpress_en/353" title="2RuotExpress" target="_self"><span class="ixLabel">2RuotExpress</span></a></li>
<li class="ixUnselected" id="ixMenuNode_351"><a href="/SITO_SDA-INSIDEX-WEB/pages/Capi_Appesi_en/351" title="Capi Appesi (Hanged Clothes)" target="_self"><span class="ixLabel">Capi Appesi (Hanged Clothes)</span></a></li>
<li class="ixUnselected" id="ixMenuNode_352"><a href="/SITO_SDA-INSIDEX-WEB/pages/Pharmaexpress_en/352" title="Pharmaexpress" target="_self"><span class="ixLabel">Pharmaexpress</span></a></li>
  <li class="ixUnselected" id="ixMenuNode_354"><a href="/SITO_SDA-INSIDEX-WEB/pages/Servizi_Accessori_en/329" title="* Extra Services *" target="_self"><span class="ixLabel">* Extra Services *</span></a></li>
</ul>
</li>
<li class="ixHasChildren ixUnselected" id="ixMenuNode_329"><a href="/SITO_SDA-INSIDEX-WEB/pages/Servizi_Accessori_en/329" title="Extra Services" target="_self"><span class="ixLabel">Extra Services</span></a>
<ul>
<li class="ixHasChildren ixUnselected" id="ixMenuNode_355"><a href="/SITO_SDA-INSIDEX-WEB/pages/Ease_of_delivery_en/355" title="Ease of delivery" target="_self"><span class="ixLabel">Ease of delivery</span></a>
<ul>
<li class="ixUnselected" id="ixMenuNode_359"><a href="/SITO_SDA-INSIDEX-WEB/pages/Al_Piano_en/359" title="Al Piano (To the floor)" target="_self"><span class="ixLabel">Al Piano (To the floor)</span></a></li>
<li class="ixUnselected" id="ixMenuNode_360"><a href="/SITO_SDA-INSIDEX-WEB/pages/Su_Appuntamento_en/360" title="Su Appuntamento (By appointment)" target="_self"><span class="ixLabel">Su Appuntamento (By appointment)</span></a></li>
<li class="ixUnselected" id="ixMenuNode_361"><a href="/SITO_SDA-INSIDEX-WEB/pages/Di_Sabato_en/361" title="Di Sabato (On saturday)" target="_self"><span class="ixLabel">Di Sabato (On saturday)</span></a></li>
<li class="ixUnselected" id="ixMenuNode_362"><a href="/SITO_SDA-INSIDEX-WEB/pages/Di_Sera_en/362" title="Di Sera (In the evening)" target="_self"><span class="ixLabel">Di Sera (In the evening)</span></a></li>
<li class="ixUnselected" id="ixMenuNode_363"><a href="/SITO_SDA-INSIDEX-WEB/pages/HOLD_FOR_COLLECTION_en/363" title="Fermo Deposito (Hold for collection)" target="_self"><span class="ixLabel">Fermo Deposito (Hold for collection)</span></a></li>
</ul>
</li>
<li class="ixHasChildren ixUnselected" id="ixMenuNode_356"><a href="/SITO_SDA-INSIDEX-WEB/pages/Punctuality_en/356" title="Punctuality" target="_self"><span class="ixLabel">Punctuality</span></a>
  <ul>
  <li class="ixUnselected" id="ixMenuNode_364"><a href="/SITO_SDA-INSIDEX-WEB/pages/Time_Definite_en/330" title="Time Definite" target="_self"><span class="ixLabel">Time Definite</span></a></li>
<li class="ixUnselected" id="ixMenuNode_365"><a href="/SITO_SDA-INSIDEX-WEB/pages/Su_Appuntamento_en/360" title="Su Appuntamento (By appointment)" target="_self"><span class="ixLabel">Su Appuntamento (By appointment)</span></a></li>
</ul>
</li>
<li class="ixHasChildren ixUnselected" id="ixMenuNode_357"><a href="/SITO_SDA-INSIDEX-WEB/pages/Value_en/357" title="Value" target="_self"><span class="ixLabel">Value</span></a>
  <ul>
  <li class="ixHasChildren ixUnselected" id="ixMenuNode_366"><a href="/SITO_SDA-INSIDEX-WEB/pages/COD_en/366" title="Contrassegno (COD)" target="_self"><span class="ixLabel">Contrassegno (COD)</span></a></li>
  <li class="ixUnselected" id="ixMenuNode_367"><a href="/SITO_SDA-INSIDEX-WEB/pages/INSURANCE_en/367" title="Assicurazione (Insurance)" target="_self"><span class="ixLabel">Assicurazione (Insurance)</span></a></li>
  <li class="ixUnselected" id="ixMenuNode_368"><a href="/SITO_SDA-INSIDEX-WEB/pages/Copertura_Basic_en/368" title="Copertura Basic (Basic coverage)" target="_self"><span class="ixLabel">Copertura Basic (Basic coverage)</span></a></li>
</ul>
</li>
<li class="ixHasChildren ixUnselected" id="ixMenuNode_358"><a href="/SITO_SDA-INSIDEX-WEB/pages/Monitoring_en/358" title="Monitoring" target="_self"><span class="ixLabel">Monitoring</span></a>
  <ul>
  <li class="ixUnselected" id="ixMenuNode_369"><a href="/SITO_SDA-INSIDEX-WEB/pages/Smart_Alert_en/369" title="Smart Alert" target="_self"><span class="ixLabel">Smart Alert</span></a></li>
<li class="ixUnselected" id="ixMenuNode_370"><a href="/SITO_SDA-INSIDEX-WEB/pages/Prova_di_Consegna_en/370" title="Prova di consegna (Proof of delivery)" target="_self"><span class="ixLabel">Prova di consegna (Proof of delivery)</span></a></li>
<li class="ixUnselected" id="ixMenuNode_371"><a href="/SITO_SDA-INSIDEX-WEB/pages/Digipod_en/371" title="Digipod" target="_self"><span class="ixLabel">Digipod</span></a></li>
  <li class="ixUnselected" id="ixMenuNode_372"><a href="/SITO_SDA-INSIDEX-WEB/pages/Re_call_Re_mail_en/372" title="Re-call and Re-mail" target="_self"><span class="ixLabel">Re-call and Re-mail</span></a></li>
</ul>
</li>
<li class="ixHasChildren ixUnselected" id="ixMenuNode_385"><a href="/SITO_SDA-INSIDEX-WEB/pages/Planning_en/385" title="Planning" target="_self"><span class="ixLabel">Planning</span></a>
  <ul>
  <li class="ixUnselected" id="ixMenuNode_413"><a href="/SITO_SDA-INSIDEX-WEB/pages/Redelivery_by_Appointment_it/413" target="_self"><span class="ixLabel">Redelivery by Appointment</span></a></li>
<li class="ixUnselected" id="ixMenuNode_386"><a href="/SITO_SDA-INSIDEX-WEB/pages/Nuovo_accessorio_A_Giorno_Orario_Definito_en/386" title="Fixed Day-Time" target="_self"><span class="ixLabel">Fixed Day-Time</span></a></li>
</ul>
</li>
<li class="ixUnselected" id="ixMenuNode_387"><a href="/SITO_SDA-INSIDEX-WEB/pages/Bottiglie_protette_e_sicure_nel_network_SDA_en/387" title="Packaging for bottles" target="_self"><span class="ixLabel">Packaging for bottles</span></a></li>
                                                                                                                                                                                                                       </ul>
                                                                                                                                                                                                                       </li>
                                                                                                                                                                                                                       <li class="ixUnselected" id="ixMenuNode_392"><a href="/SITO_SDA-INSIDEX-WEB/pages/Online_Billing_en/294" target="_self"><span class="ixLabel">Attiva gratis la fattuta online</span></a></li>
<li class="ixUnselected" id="ixMenuNode_396"><a href="/SITO_SDA-INSIDEX-WEB/pages/UN_SERVIZIO_ANCORA_PIU_SMART_it/396" target="_self"><span class="ixLabel">App SDA</span></a></li>
<li class="ixUnselected" id="ixMenuNode_400"><a href="http://www.kipoint.it" target="_blank"><span class="ixLabel">kipoint</span></a></li>
  </ul>
  </li>
  <li class="ixHasChildren ixUnselected" id="ixMenuNode_268"><a href="/SITO_SDA-INSIDEX-WEB/pages/mySDA_en/312" title="mySDA 2.0" target="_self"><span class="ixLabel">mySDA 2.0</span></a>
<ul>
<li class="ixUnselected" id="ixMenuNode_312"><a href="/SITO_SDA-INSIDEX-WEB/pages/mySDA_en/312" title="What is mySDA?" target="_self"><span class="ixLabel">What is mySDA?</span></a></li>
<li class="ixUnselected" id="ixMenuNode_313"><a href="/SITO_SDA-INSIDEX-WEB/pages/MYSDA_FAQ_en/313" title="MYSDA FAQ" target="_self"><span class="ixLabel">MYSDA FAQ</span></a></li>
<li class="ixUnselected" id="ixMenuNode_393"><a href="/SITO_SDA-INSIDEX-WEB/pages/Online_Billing_en/294" target="_self"><span class="ixLabel">Attiva gratis la fattuta online</span></a></li>
<li class="ixUnselected" id="ixMenuNode_397"><a href="/SITO_SDA-INSIDEX-WEB/pages/UN_SERVIZIO_ANCORA_PIU_SMART_it/397" target="_self"><span class="ixLabel">App SDA</span></a></li>
<li class="ixUnselected" id="ixMenuNode_401"><a href="http://www.kipoint.it" target="_blank"><span class="ixLabel">kipoint</span></a></li>
  </ul>
  </li>
  <li class="ixHasChildren ixUnselected" id="ixMenuNode_269"><a href="/SITO_SDA-INSIDEX-WEB/pages/TECHNOLOGICAL_SOLUTIONS_en/269" title="Technological Solutions" target="_self"><span class="ixLabel">Technological Solutions</span></a>
<ul>
<li class="ixUnselected" id="ixMenuNode_314"><a href="/SITO_SDA-INSIDEX-WEB/pages/SDAWEB_and_SDAWEB_Basic_en/314" title="SDAWEB and SDAWEB Basic" target="_self"><span class="ixLabel">SDAWEB and SDAWEB Basic</span></a></li>
<li class="ixUnselected" id="ixMenuNode_315"><a href="/SITO_SDA-INSIDEX-WEB/pages/INVIOWEB_en/315" title="INVIOWEB" target="_self"><span class="ixLabel">INVIOWEB</span></a></li>
  <li class="ixUnselected" id="ixMenuNode_416"><a href="/SITO_SDA-INSIDEX-WEB/pages/INVIOEASY_it/416" target="_self"><span class="ixLabel">INVIOEASY</span></a></li>
  <li class="ixUnselected" id="ixMenuNode_317"><a href="/SITO_SDA-INSIDEX-WEB/pages/INVIOFILE_E_INVIOSYSTEM_en/317" title="INVIOFILE AND INVIOSYSTEM" target="_self"><span class="ixLabel">INVIOFILE AND INVIOSYSTEM</span></a></li>
<li class="ixUnselected" id="ixMenuNode_462"><a href="/SITO_SDA-INSIDEX-WEB/pages/Webservices_it/462" target="_self"><span class="ixLabel">Webservices</span></a></li>
  <li class="ixUnselected" id="ixMenuNode_394"><a href="/SITO_SDA-INSIDEX-WEB/pages/Online_Billing_en/294" target="_self"><span class="ixLabel">Attiva gratis la fattuta online</span></a></li>
<li class="ixUnselected" id="ixMenuNode_398"><a href="/SITO_SDA-INSIDEX-WEB/pages/UN_SERVIZIO_ANCORA_PIU_SMART_it/398" target="_self"><span class="ixLabel">App SDA</span></a></li>
<li class="ixUnselected" id="ixMenuNode_402"><a href="http://www.kipoint.it" target="_blank"><span class="ixLabel">kipoint</span></a></li>
  </ul>
  </li>
  <li class="ixHasChildren ixUnselected" id="ixMenuNode_455"><a href="/SITO_SDA-INSIDEX-WEB/pages/Logistics_services_en/455" title="Logistics services" target="_self"><span class="ixLabel">Logistics services</span></a>
<ul>
<li class="ixUnselected" id="ixMenuNode_456"><a href="/SITO_SDA-INSIDEX-WEB/pages/Integrated_logistic_en/456" title="Integrated logistic" target="_self"><span class="ixLabel">Integrated logistic</span></a></li>
<li class="ixUnselected" id="ixMenuNode_457"><a href="/SITO_SDA-INSIDEX-WEB/pages/Technical_Courier_en/457" title="Technical Courier" target="_self"><span class="ixLabel">Technical Courier</span></a></li>
<li class="ixUnselected" id="ixMenuNode_458"><a href="/SITO_SDA-INSIDEX-WEB/pages/Bookbinding_en/458" title="Bookbinding" target="_self"><span class="ixLabel">Bookbinding</span></a></li>
  <li class="ixUnselected" id="ixMenuNode_459"><a href="/SITO_SDA-INSIDEX-WEB/pages/Online_Billing_en/294" target="_self"><span class="ixLabel">Attiva gratis la fattuta online</span></a></li>
<li class="ixUnselected" id="ixMenuNode_460"><a href="/SITO_SDA-INSIDEX-WEB/pages/UN_SERVIZIO_ANCORA_PIU_SMART_it/460" target="_self"><span class="ixLabel">App SDA</span></a></li>
<li class="ixUnselected" id="ixMenuNode_461"><a href="http://www.kipoint.it" target="_self"><span class="ixLabel">Kipoint</span></a></li>
  </ul>
  </li>
  <li class="ixUnselected" id="ixMenuNode_270"><a href="/SITO_SDA-INSIDEX-WEB/pages/Skype_en/270" title="Help on-line" target="_self"><span class="ixLabel">Help on-line</span></a></li>
<li class="ixUnselected" id="ixMenuNode_321"><a href="/SITO_SDA-INSIDEX-WEB/pages/Gen_Terms_of_Transport_en/321" title="General Terms of Transport" target="_self"><span class="ixLabel">General Terms of Transport</span></a></li>
<li class="ixUnselected" id="ixMenuNode_420"><a href="/SITO_SDA-INSIDEX-WEB/pages/Service_Explanation_Addendum_en/420" title="Service Explanation Addendum" target="_self"><span class="ixLabel">Service Explanation Addendum</span></a></li>
<li class="ixUnselected" id="ixMenuNode_322"><a href="/SITO_SDA-INSIDEX-WEB/pages/Solutions_Addendum_en/322" title="Solutions Addendum" target="_self"><span class="ixLabel">Solutions Addendum</span></a></li>
</ul>
</li>
</ul>
</li>
</ul>
</div>


</div>
</div>
<div class="ixSectionContainer ixSectionContainer_AfterOut ixSectionContainer_footer-federato">
  <div class="ixSection ixOdd ixCounter1 ixSection_footerfederato">

  <div class="ixMenu ixMenu3" id="ixMenu_Footer">
  <div class="ixTitle"></div>
  <div class="ixText"></div>
  <ul>
  <li class="ixUnselected ixCounter1" id="ixMenuNode_321"><a href="/SITO_SDA-INSIDEX-WEB/pages/Gen_Terms_of_Transport_en/321" title="General Terms of Transport" target="_self"><span class="ixLabel">General Terms of Transport</span></a></li>
<li class="ixUnselected ixCounter2" id="ixMenuNode_420"><a href="/SITO_SDA-INSIDEX-WEB/pages/Service_Explanation_Addendum_en/420" title="Service Explanation Addendum" target="_self"><span class="ixLabel">Service Explanation Addendum</span></a></li>
<li class="ixUnselected ixCounter3" id="ixMenuNode_322"><a href="/SITO_SDA-INSIDEX-WEB/pages/Solutions_Addendum_en/322" title="Solutions Addendum" target="_self"><span class="ixLabel">Solutions Addendum</span></a></li>
</ul>
</div><div class="ixText"><div class="ixTxt"><div class="footer_poste_italiane">
  <!-- start footer da incorporare -->
<div class="content content-footer content-footer-post">
  <div class="container">
  <div class="row">
  <div class="col-md-12">
  <div class="row">
  <div class="col-md-5">
  <p class="text-xs-center text-md-left">SDA Express Courier - Partita iva : 05714511002</p>
</div>
<div class="col-md-7">
  <div class="clearfix">
  <div class="base-footer">
  <a href="/SITO_SDA-INSIDEX-WEB/pages/Informazioni_Legali_it/119" class="first-base-footer-element">Informazioni legali</a>
<a href="/SITO_SDA-INSIDEX-WEB/pages/Tutela_della_Privacy_it/119" class="">Privacy</a>
  <a href="//www.poste.it" target="_blank" class="last-base-footer-element">Gruppo Poste Italiane</a>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<!-- end footer da incorporare -->
</div>
</div></div>



</div>
</div>



<!--  Fine piè di pagina -->
</td></tr>
</tbody>
</table>
















<script type="text/javascript">
//<![CDATA[

var myNewsNum = $(".ixSectionContainer_Header .ixList li").length;
var myNewsDisplayed = 1;
var newsInt = null;

$(document).ready(function() {
  if ($.browser.msie) {
    $("html").addClass('msie msie' + parseInt($.browser.version, 10));
  }

  if ($('.ixSectionContainer_Header .ixList .ixCounter1 .ixImage img').attr('src')) {
    $('.ixSectionContainer_Header .ixList').fadeIn('slow');
    newsInt = setInterval("slideNews()", 10000);
  } else {
    newsInt = setInterval("slideNews()", 10000);
  }

  $('.ixCategory').addClass("CategoryClosed");
  $('.ixCategory ol').css('display', 'none');

  var fileUploadLinkLabel = $('body').hasClass('ixLang_it') ? 'Caricamento File (Max 10MB)' : 'File upload (Max 10MB)';
  var fileUploadLinkUrlParam = $('body').hasClass('ixLang_it') ? 'it' : 'en';
  var filedUploadLink = '<a href="javascript:;" onclick="window.open(\'/SITO_SDA-INSIDEX-WEB/form_sda_upload.jsp?ixLang='+ fileUploadLinkUrlParam +'\', \'CaricamentoFile\', \'top=10, left=10, width=600, height=300\'); return false;">'+ fileUploadLinkLabel +'</a>';

  $('#field_SDA_Conciliazione_link_file_upload').html(filedUploadLink);
  $('#field_SDA_Form_unico_link_file_upload').html(filedUploadLink);
  $('#field_SDA_Form_unico_EN_link_file_upload').html(filedUploadLink);
  $('#ixFormCommand_SDA_Conciliazione_submit a').click(function(){
    $('body').append('<div id="overlay" />');
  });
  $('#ixFormCommand_SDA_Form_unico_submit a').click(function(){
    $('body').append('<div id="overlay" />');
  });
  $('#ixFormCommand_SDA_Form_unico_EN_submit a').click(function(){
    $('body').append('<div id="overlay" />');
  });

  $('.ixImgCaptcha img').attr('src', '/SITO_SDA-INSIDEX-WEB'+ $('.ixImgCaptcha img').attr('src'));
  $("#ixMainContent form input[name='captcha']").parent().find('a').each(function(){
    $(this).attr('onclick','').unbind('click');
    $(this).click(function() {
      var now = new Date();
      var src = '/SITO_SDA-INSIDEX-WEB/captcha?'+ now.getTime();
      $('.ixImgCaptcha img').attr('src', src);
    });
  });

  if ($('body').hasClass('ixPrintable')) {
    $('#ixMainContent form').append('<input type="hidden" name="ixPrint" value="true" />');
  }

  if ($('body#ixBody_Home_it').length > 0) {
    $.ajax({
      url : '/SITO_SDA-INSIDEX-WEB/ajax',
      data : {ixListRecordId : 2},
      dataType : 'json'
    }).done(function(json) {
      if (json && json.records) {
        var notificationSpan = '<span class="news-in-evidenza-counter">'+ json.records +'</span>';
        $('#ixMainContentContainer .ixSectionContainer_AfterIn.ixSectionContainer_SubContent .ixCounter2 .ixTitle h2').append(notificationSpan);
      }
    });
  }

  // nasconde il menu in lingua quando viene incorporato nelle pagine interne
  if (location.href.indexOf('/SITO_SDA-INSIDEX-WEB/') == -1) {
    if ($('html').attr('xml:lang') == 'it') {
      $('.ixSectionContainer_Footer .ixMenuTree #ixMenuNode_102').remove();
    } else if ($('html').attr('xml:lang') == 'en') {
      $('.ixSectionContainer_Footer .ixMenuTree #ixMenuNode_101').remove();
    }
  }

  // elimina link e titolo sull'header per i banner
  //$('.ixSection_Header .ixList_Pages .ixTitle').remove();
  //$('.ixSection_Header .ixList_Pages .ixText').remove();
  //$('.ixSection_Header .ixList_Pages a').attr('href', '/SITO_SDA-INSIDEX-WEB/documents/Operativit_Natale_2016');
  //$('.ixSection_Header .ixList_Pages a').css('cursor', 'default');
});

function slideNews() {
  $(".ixSectionContainer_Header .ixList .ixCounter" + myNewsDisplayed).fadeOut('fast');
  myNewsDisplayed++;
  if (myNewsDisplayed > myNewsNum) {
    myNewsDisplayed=1;
  }
  $(".ixSectionContainer_Header .ixList .ixCounter" + myNewsDisplayed).fadeIn('slow');
}

function showNews(n) {
  $(".ixSectionContainer_Header .ixList .ixCounter" + myNewsDisplayed).fadeOut('fast');
  myNewsDisplayed = n;
  $(".ixSectionContainer_Header .ixList .ixCounter" + n).fadeIn('slow');
  clearInterval(newsInt);
}

function insideCollapseCategory(idCategory) {

  if ($('#' + idCategory).hasClass("CategoryClosed")) {
    $('#' + idCategory).removeClass("CategoryClosed");
    $('#' + idCategory).addClass("CategoryOpen");
    $('#' + idCategory + ' ol').fadeIn('slow');
  } else {
    $('#' + idCategory).removeClass("CategoryOpen");
    $('#' + idCategory).addClass("CategoryClosed");
    $('#' + idCategory + ' ol').fadeOut('fast');
  }
}


/*!
 * liScroll 1.0
 * Examples and documentation at: 
 * http://www.gcmingati.net/wordpress/wp-content/lab/jquery/newsticker/jq-liscroll/scrollanimate.html
 * 2007-2010 Gian Carlo Mingati
 * Version: 1.0.2.1 (22-APRIL-2011)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 * Requires:
 * jQuery v1.2.x or later
 * 
 */

jQuery.fn.liScroll = function(settings) {
  settings = jQuery.extend({
    travelocity: 0.07
  }, settings);
  return this.each(function(){
    var $strip = jQuery(this);
    $strip.addClass("newsticker")
    var stripWidth = 1;
    $strip.find("li").each(function(i){
      stripWidth += jQuery(this, i).outerWidth(true); // thanks to Michael Haszprunar and Fabien Volpi
    });
    var $mask = $strip.wrap("<div class='mask'><\/div>");
    var $tickercontainer = $strip.parent().wrap("<div class='tickercontainer'><\/div>");
    var containerWidth = $strip.parent().parent().width();	//a.k.a. 'mask' width 	
    $strip.width(stripWidth);
    var totalTravel = stripWidth+containerWidth;
    var defTiming = totalTravel/settings.travelocity;	// thanks to Scott Waye		
    function scrollnews(spazio, tempo){
      $strip.animate({left: '-='+ spazio}, tempo, "linear", function(){$strip.css("left", containerWidth); scrollnews(totalTravel, defTiming);});
    }
    scrollnews(totalTravel, defTiming);
    $strip.hover(function(){
        jQuery(this).stop();
      },
      function(){
        var offset = jQuery(this).offset();
        var residualSpace = offset.left + stripWidth;
        var residualTime = residualSpace/settings.travelocity;
        scrollnews(residualSpace, residualTime);
      });
  });
};
$(function(){
  $(".ixSectionContainer_Ticker .ixList_Pages").liScroll({travelocity: 0.05});
});

//]]>
</script>
<script type="text/javascript">
//<![CDATA[
var cookieOk = leggiCookie("cookie-banner");
if (cookieOk != 'ok') {setTimeout(function(){mostraInformativa()}, 1000);}

function mostraInformativa() {
  var buttonText = 'Chiudi';
  var text = '<a id="cookie-ok" href="javascript: chiudiInformativa();">' + buttonText + '</a>';
  text 	+= '<strong>Informativa ai sensi dell\'art. 13 D.LGS. 30 giugno 2003 n.196</strong><br/>';
  text 	+= 'Questo sito utilizza i cookie per migliorare la tua esperienza di navigazione.<br/>';
  text 	+= 'Per maggiori informazioni su come utilizzare e gestire i cookie, consulta la pagina "<a href="http://www.sda.it/pages/cookie">Informativa sui cookie</a>".<br/>';
  text 	+= 'Chiudendo questo elemento o interagendo con questo sito senza modificare le impostazioni del browser acconsenti all\'utilizzo di tutti i cookies di cui fa uso il sito.';

  var cookieDiv = document.getElementById('cookie-banner');
  if (!cookieDiv) {
    cookieDiv = document.createElement('div');
    cookieDiv.setAttribute('id', 'cookie-banner');
    cookieDiv.innerHTML = text;
    document.getElementById('ixPage').appendChild(cookieDiv);
  } else {
    document.getElementById('cookie-banner').removeAttribute('class');
  }
}
function chiudiInformativa() {
  salvaCookie('cookie-banner', 'ok', 1000);
  document.getElementById('cookie-banner').setAttribute('class', 'chiuso');
}
function salvaCookie(name, value, days) {
  var date, expires;
  if (days) {
    date = new Date();
    date.setTime(date.getTime() + (days*24*60*60*1000));
    expires = '; expires='+date.toGMTString();
  } else {
    expires = '';
  }
  document.cookie = name+'='+value+expires+"; path=/";
}
function leggiCookie(name) {
  var c, i;
  var nameEQ = name + '=';
  var ca = document.cookie.split(';');
  for(i=0; i<ca.length; i++) {
    c = ca[i];
    while (c.charAt(0)==' ') c = c.substring(1,c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
  }
  return null;
}
function cancellaCookie(name) {
  salvaCookie(name, '', -1);
}
//]]>

</script>




<script>
var onloadDiv=document.getElementById("onloadDiv");
//alert(onloadDiv);
if (onloadDiv){
  var toBeExecuted=onloadDiv.innerHTML;
  //alert(toBeExecuted);
  try{
    eval(toBeExecuted);
  }catch(e){}
}
</script>

</body></html>`;
/* eslint-enable max-len,no-useless-escape,no-tabs */
exports.result = {
  esito: {
    esito: true,
    consegnata: true,
    dataOra: '2017-01-03T16:17:00.000Z',
    firma: 'donofrio',
  },
  steps: [
    {
      data: '2017-01-02T23:00:00.000Z',
      descrizione: 'LA SPEDIZIONE E\' STATA CONSEGNATA',
      filiale: 'Milano 2',
    },
    {
      data: '2017-01-02T23:00:00.000Z',
      descrizione: 'IN CONSEGNA',
      filiale: 'Milano 2',
    },
    {
      data: '2017-01-02T23:00:00.000Z',
      descrizione: 'IN ATTESA DI CONSEGNA SECONDO I TEMPI PREVISTI',
      filiale: 'Milano 2',
    },
    {
      data: '2017-01-01T23:00:00.000Z',
      descrizione: 'DESTINAT. NON DISPONIBILE PER CHIUSURA SETTIMANALE',
      filiale: 'Milano 2',
    },
    {
      data: '2017-01-01T23:00:00.000Z',
      descrizione: 'IN CONSEGNA',
      filiale: 'Milano 2',
    },
    {
      data: '2016-12-30T23:00:00.000Z',
      descrizione: 'IN ATTESA DI CONSEGNA SECONDO I TEMPI PREVISTI',
      filiale: 'Milano 2',
    },
    {
      data: '2016-12-30T23:00:00.000Z',
      descrizione: 'LA SPEDIZIONE E\' PARTITA',
      filiale: 'Hub Espresso Milano',
    },
    {
      data: '2016-12-30T23:00:00.000Z',
      descrizione: 'IN TRANSITO',
      filiale: 'Hub Espresso Milano',
    },
    {
      data: '2016-12-29T23:00:00.000Z',
      descrizione: 'LA SPEDIZIONE E\' PARTITA',
      filiale: 'Terni',
    },
    {
      data: '2016-12-29T23:00:00.000Z',
      descrizione: 'SPEDIZIONE ACCETTATA PRESSO LA FILIALE',
      filiale: 'Terni',
    },
  ],
};
