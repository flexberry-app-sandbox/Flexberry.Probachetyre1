﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Probachetyre
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Форма рег входа.
    /// </summary>
    // *** Start programmer edit section *** (ФормаРегВхода CustomAttributes)

    // *** End programmer edit section *** (ФормаРегВхода CustomAttributes)
    [AutoAltered()]
    [Caption("Регистрация входа в номер")]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ФормаРегВходаE", new string[] {
            "Дата as \'Дата\'",
            "Комната as \'Комната\'"})]
    [AssociatedDetailViewAttribute("ФормаРегВходаE", "ТЧРегВхГост", "ТЧРегВхГостE", true, "", "Вход гостя", true, new string[] {
            ""})]
    [AssociatedDetailViewAttribute("ФормаРегВходаE", "ТЧВхСотруд", "ТЧВхСотрудE", true, "", "Вход сотрудника", true, new string[] {
            ""})]
    [MasterViewDefineAttribute("ФормаРегВходаE", "Комната", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "Номер")]
    [View("ФормаРегВходаL", new string[] {
            "Дата as \'Дата\'",
            "Комната.Номер as \'Номер\'"})]
    [AssociatedDetailViewAttribute("ФормаРегВходаL", "ТЧВхСотруд", "ТЧВхСотрудE", true, "", "Вход сотрудника", true, new string[] {
            ""})]
    [AssociatedDetailViewAttribute("ФормаРегВходаL", "ТЧРегВхГост", "ТЧРегВхГостE", true, "", "Вход гостя", true, new string[] {
            ""})]
    public class ФормаРегВхода : ICSSoft.STORMNET.DataObject
    {
        
        private System.DateTime fДата = System.DateTime.Now;
        
        private IIS.Probachetyre.Комната fКомната;
        
        private IIS.Probachetyre.DetailArrayOfТЧВхСотруд fТЧВхСотруд;
        
        private IIS.Probachetyre.DetailArrayOfТЧРегВхГост fТЧРегВхГост;
        
        // *** Start programmer edit section *** (ФормаРегВхода CustomMembers)

        // *** End programmer edit section *** (ФормаРегВхода CustomMembers)

        
        /// <summary>
        /// Дата.
        /// </summary>
        // *** Start programmer edit section *** (ФормаРегВхода.Дата CustomAttributes)

        // *** End programmer edit section *** (ФормаРегВхода.Дата CustomAttributes)
        public virtual System.DateTime Дата
        {
            get
            {
                // *** Start programmer edit section *** (ФормаРегВхода.Дата Get start)

                // *** End programmer edit section *** (ФормаРегВхода.Дата Get start)
                System.DateTime result = this.fДата;
                // *** Start programmer edit section *** (ФормаРегВхода.Дата Get end)

                // *** End programmer edit section *** (ФормаРегВхода.Дата Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ФормаРегВхода.Дата Set start)

                // *** End programmer edit section *** (ФормаРегВхода.Дата Set start)
                this.fДата = value;
                // *** Start programmer edit section *** (ФормаРегВхода.Дата Set end)

                // *** End programmer edit section *** (ФормаРегВхода.Дата Set end)
            }
        }
        
        /// <summary>
        /// Форма рег входа.
        /// </summary>
        // *** Start programmer edit section *** (ФормаРегВхода.Комната CustomAttributes)

        // *** End programmer edit section *** (ФормаРегВхода.Комната CustomAttributes)
        [PropertyStorage(new string[] {
                "Комната"})]
        [NotNull()]
        public virtual IIS.Probachetyre.Комната Комната
        {
            get
            {
                // *** Start programmer edit section *** (ФормаРегВхода.Комната Get start)

                // *** End programmer edit section *** (ФормаРегВхода.Комната Get start)
                IIS.Probachetyre.Комната result = this.fКомната;
                // *** Start programmer edit section *** (ФормаРегВхода.Комната Get end)

                // *** End programmer edit section *** (ФормаРегВхода.Комната Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ФормаРегВхода.Комната Set start)

                // *** End programmer edit section *** (ФормаРегВхода.Комната Set start)
                this.fКомната = value;
                // *** Start programmer edit section *** (ФормаРегВхода.Комната Set end)

                // *** End programmer edit section *** (ФормаРегВхода.Комната Set end)
            }
        }
        
        /// <summary>
        /// Форма рег входа.
        /// </summary>
        // *** Start programmer edit section *** (ФормаРегВхода.ТЧВхСотруд CustomAttributes)

        // *** End programmer edit section *** (ФормаРегВхода.ТЧВхСотруд CustomAttributes)
        public virtual IIS.Probachetyre.DetailArrayOfТЧВхСотруд ТЧВхСотруд
        {
            get
            {
                // *** Start programmer edit section *** (ФормаРегВхода.ТЧВхСотруд Get start)

                // *** End programmer edit section *** (ФормаРегВхода.ТЧВхСотруд Get start)
                if ((this.fТЧВхСотруд == null))
                {
                    this.fТЧВхСотруд = new IIS.Probachetyre.DetailArrayOfТЧВхСотруд(this);
                }
                IIS.Probachetyre.DetailArrayOfТЧВхСотруд result = this.fТЧВхСотруд;
                // *** Start programmer edit section *** (ФормаРегВхода.ТЧВхСотруд Get end)

                // *** End programmer edit section *** (ФормаРегВхода.ТЧВхСотруд Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ФормаРегВхода.ТЧВхСотруд Set start)

                // *** End programmer edit section *** (ФормаРегВхода.ТЧВхСотруд Set start)
                this.fТЧВхСотруд = value;
                // *** Start programmer edit section *** (ФормаРегВхода.ТЧВхСотруд Set end)

                // *** End programmer edit section *** (ФормаРегВхода.ТЧВхСотруд Set end)
            }
        }
        
        /// <summary>
        /// Форма рег входа.
        /// </summary>
        // *** Start programmer edit section *** (ФормаРегВхода.ТЧРегВхГост CustomAttributes)

        // *** End programmer edit section *** (ФормаРегВхода.ТЧРегВхГост CustomAttributes)
        public virtual IIS.Probachetyre.DetailArrayOfТЧРегВхГост ТЧРегВхГост
        {
            get
            {
                // *** Start programmer edit section *** (ФормаРегВхода.ТЧРегВхГост Get start)

                // *** End programmer edit section *** (ФормаРегВхода.ТЧРегВхГост Get start)
                if ((this.fТЧРегВхГост == null))
                {
                    this.fТЧРегВхГост = new IIS.Probachetyre.DetailArrayOfТЧРегВхГост(this);
                }
                IIS.Probachetyre.DetailArrayOfТЧРегВхГост result = this.fТЧРегВхГост;
                // *** Start programmer edit section *** (ФормаРегВхода.ТЧРегВхГост Get end)

                // *** End programmer edit section *** (ФормаРегВхода.ТЧРегВхГост Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ФормаРегВхода.ТЧРегВхГост Set start)

                // *** End programmer edit section *** (ФормаРегВхода.ТЧРегВхГост Set start)
                this.fТЧРегВхГост = value;
                // *** Start programmer edit section *** (ФормаРегВхода.ТЧРегВхГост Set end)

                // *** End programmer edit section *** (ФормаРегВхода.ТЧРегВхГост Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ФормаРегВходаE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ФормаРегВходаE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ФормаРегВходаE", typeof(IIS.Probachetyre.ФормаРегВхода));
                }
            }
            
            /// <summary>
            /// "ФормаРегВходаL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ФормаРегВходаL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ФормаРегВходаL", typeof(IIS.Probachetyre.ФормаРегВхода));
                }
            }
        }
    }
}
