function facebook_login(){jQuery('#wp-social-login-connect-options [title="Connect with Facebook"] img').trigger("click"),jQuery('.wp-social-login-provider-list [title="Connect with Facebook"] img').trigger("click")}function twitter_login(){jQuery('#wp-social-login-connect-options [title="Connect with Twitter"] img').trigger("click"),jQuery('.wp-social-login-provider-list [title="Connect with Twitter"] img').trigger("click")}function google_login(){jQuery('#wp-social-login-connect-options [title="Connect with Google"] img').trigger("click"),jQuery('.wp-social-login-provider-list [title="Connect with Google"] img').trigger("click")}function check_agreement(a){var b=jQuery(a).closest(".mshop_agreement_wrap"),c=jQuery(".mshop_agreement",b).not(":checked").length;0==c?jQuery("#mshop_registration_next").removeAttr("disabled"):jQuery("#mshop_registration_next").attr("disabled","disabled")}function mshop_members_login_reset_form(){"yes"==_mshop_members_login_settings.registration_after_agreement&&(jQuery(".mshop_popup_agreement_wrap").scrollTop(0),jQuery(".mshop_popup_agreement_wrap textarea").scrollTop(0),jQuery(".mshop_members_login_popup #mshop_agreement_tab").css("display","block"),jQuery(".mshop_members_login_popup #mshop_registration_tab").css("display","none")),jQuery(".mshop_members_login_popup input[type=text],[type=password]").each(function(){jQuery(this).val("")}),jQuery(".mshop_members_login_popup input[type=checkbox]").each(function(){jQuery(this).attr("checked",!1)})}function mshop_members_login_agreeChkAllTop(){"checked"==jQuery('input[name="mshop_chkbox_agree_all_top"]').attr("checked")?jQuery(".cod_sign_up .cod_checkbox").attr("checked","true"):jQuery(".cod_sign_up .cod_checkbox").removeAttr("checked")}function mshop_members_login_agreeChkAllBottom(){"checked"==jQuery('input[name="mshop_chkbox_agree_all_bottom"]').attr("checked")?jQuery(".cod_sign_up .cod_checkbox").attr("checked","true"):jQuery(".cod_sign_up .cod_checkbox").removeAttr("checked")}jQuery(document).ready(function(a){a.ajaxSetup({type:"POST",url:_mshop_members_login_settings.ajaxurl}),a.blockUI.defaults.css.border="none",a.blockUI.defaults.css.width="16px",a.blockUI.defaults.css.height="16px",a.blockUI.defaults.css.background="transparent",window.mshop_members_show_message=function(a,b){return null==b?void jQuery(".mshop-members-status-container",a).remove():(0==jQuery(".mshop-members-status-container",a).length&&jQuery(".form-wrapper",a).prepend('<div class="mshop-members-status-container"><div class="mshop-members-msg-target"></div></div>'),void jQuery(".mshop-members-msg-target",a).fadeIn().html(b.data))},a(document).on("submit",".login_form",function(b){b.preventDefault(),jQuery.support.cors=!0,a.ajax({crossDomain:!0,data:"action=mshop_members_login&"+a(this).serialize(),beforeSend:function(){mshop_members_show_message(".login_form"),a("#mshop_members_popup").block({message:a("#mshop_members_ajax_loader")})},complete:function(){a("#mshop_members_popup").unblock()},success:function(a){a.success?""!=_mshop_members_login_settings.login_redirect?window.location.replace(_mshop_members_login_settings.login_redirect):window.location.reload():(mshop_members_show_message(".login_form",a),jQuery(".login_form input[type='text']").val(""),jQuery(".login_form input[type='password']").val(""),jQuery(".login_form input[type='text']:first").focus())}})}),a(document).on("submit",".lostpassword_form",function(b){b.preventDefault(),jQuery.support.cors=!0,a.ajax({crossDomain:!0,data:"action=mshop_members_lostpassword&"+a(this).serialize(),beforeSend:function(){mshop_members_show_message(".lostpassword_form"),a("#mshop_members_lostpassword_popup").block({message:a("#mshop_members_ajax_loader")})},complete:function(){a("#mshop_members_lostpassword_popup").unblock()},success:function(a){a.success?mshop_members_show_message(".lostpassword_form",a):(mshop_members_show_message(".lostpassword_form",a),jQuery(".lostpassword_form input[type='email']").val(""),jQuery(".lostpassword_form input[type='email']:first").focus())}})}),a(document).on("submit",".register_form",function(b){b.preventDefault(),jQuery.support.cors=!0,a.ajax({crossDomain:!0,data:"action=mshop_members_register&"+a(this).serialize(),dataType:"json",beforeSend:function(){mshop_members_show_message(".register_form"),a("#mshop_members_register_popup").block({message:a("#mshop_members_ajax_loader")})},complete:function(){a("#mshop_members_register_popup").unblock()},success:function(a){a.success?(mshop_members_show_message(".register_form",a),window.location.replace(_mshop_members_login_settings.register_redirect)):(mshop_members_show_message(".register_form",a),jQuery(".register_form input[type='text']").val(""),jQuery(".register_form input[type='password']").val(""),jQuery(".register_form input[type='text']:first").focus())}})}),jQuery(".mshop_popup_agreement_wrap").on("DOMMouseScroll mousewheel",function(b){var c=a(this),d=this.scrollTop,e=this.scrollHeight,f=c.height(),g=b.originalEvent.wheelDelta,h=g>0,i=function(){return b.stopPropagation(),b.preventDefault(),b.returnValue=!1,!1};return!h&&-g>e-f-d?(c.scrollTop(e),i()):h&&g>d?(c.scrollTop(0),i()):void 0});var b=function(b){a(b)&&a(b).magnificPopup({type:"ajax",midClick:!0,closeOnBgClick:!1,closeBtnInside:!1,showCloseBtn:!1,removalDelay:500,mainClass:"mfp-move-horizontal",tLoading:"",ajax:{settings:null,cursor:"mfp-ajax-cur",tError:'<a href="%url%">The content</a> could not be loaded.'},callbacks:{open:function(){this.st.mainClass="mfp-move-horizontal"},close:function(){},ajaxContentAdded:function(){var a=this;this.content.find(".msl_close_btn").on("click",function(){a.close()}),c()}}})},c=function(){a("a[href$=mshop_members_register_form]").addClass("mshop_members_register_popup"),a("a[href$=mshop_members_login_form]").addClass("mshop_members_login_popup"),a("a[href$=mshop_members_lostpassword_form]").addClass("mshop_members_lostpassword_popup"),b(".mshop_members_register_popup"),b(".mshop_members_login_popup"),b(".mshop_members_lostpassword_popup")},d=function(){var c=a('a[href$="?mshop_login"]');c&&c.length>0&&(c.addClass("mshop_members_login_popup"),_mshop_members_login_settings.lang_code?c.attr("href",_mshop_members_login_settings.ajaxurl+"&action=mshop_members_login_form"):c.attr("href",_mshop_members_login_settings.ajaxurl+"?action=mshop_members_login_form"),b(".mshop_members_login_popup"));var d=a('a[href$="?mshop_register"]');d&&d.length>0&&(d.addClass("mshop_members_register_popup"),_mshop_members_login_settings.lang_code?d.attr("href",_mshop_members_login_settings.ajaxurl+"&action=mshop_members_register_form"):d.attr("href",_mshop_members_login_settings.ajaxurl+"?action=mshop_members_register_form"),b(".mshop_members_register_popup"))};d(),/mshop_login/.test(location.href)&&a(".mshop_members_login_popup")?a(".mshop_members_login_popup").trigger("click"):/mshop_register/.test(location.href)&&a(".mshop_members_register_popup")&&a(".mshop_members_register_popup").trigger("click")}),jQuery(document).ready(function(a){jQuery("#mshop_registration_next").click(function(){var a=jQuery(this).closest(".mshop_popup_agreement_wrap"),b=jQuery(".mshop_popup_agreement",a).not(":checked");if(b.length>0){var c="";jQuery(b).each(function(a){0!=a&&(c+=", "),c+=jQuery(this).parent().parent().children(".msl_agree_title").text()}),alert(c+_mshop_members_login_settings.agree_msg)}else jQuery("#mshop_agreement_tab").css("display","none"),jQuery("#mshop_registration_tab").css("display","block")})});