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
    /// ТЧВхСотруд.
    /// </summary>
    // *** Start programmer edit section *** (ТЧВхСотруд CustomAttributes)

    // *** End programmer edit section *** (ТЧВхСотруд CustomAttributes)
    [AutoAltered()]
    [Caption("Вход сотрудника")]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ТЧВхСотрудE", new string[] {
            "Сотрудник as \'Сотрудник\'",
            "Сотрудник.Должности.Должность"})]
    [MasterViewDefineAttribute("ТЧВхСотрудE", "Сотрудник", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "Фамилия")]
    public class ТЧВхСотруд : ICSSoft.STORMNET.DataObject
    {
        
        private IIS.Probachetyre.Сотрудник fСотрудник;
        
        private IIS.Probachetyre.ФормаРегВхода fФормаРегВхода;
        
        // *** Start programmer edit section *** (ТЧВхСотруд CustomMembers)

        // *** End programmer edit section *** (ТЧВхСотруд CustomMembers)

        
        /// <summary>
        /// ТЧВхСотруд.
        /// </summary>
        // *** Start programmer edit section *** (ТЧВхСотруд.Сотрудник CustomAttributes)

        // *** End programmer edit section *** (ТЧВхСотруд.Сотрудник CustomAttributes)
        [PropertyStorage(new string[] {
                "Сотрудник"})]
        [NotNull()]
        public virtual IIS.Probachetyre.Сотрудник Сотрудник
        {
            get
            {
                // *** Start programmer edit section *** (ТЧВхСотруд.Сотрудник Get start)

                // *** End programmer edit section *** (ТЧВхСотруд.Сотрудник Get start)
                IIS.Probachetyre.Сотрудник result = this.fСотрудник;
                // *** Start programmer edit section *** (ТЧВхСотруд.Сотрудник Get end)

                // *** End programmer edit section *** (ТЧВхСотруд.Сотрудник Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ТЧВхСотруд.Сотрудник Set start)

                // *** End programmer edit section *** (ТЧВхСотруд.Сотрудник Set start)
                this.fСотрудник = value;
                // *** Start programmer edit section *** (ТЧВхСотруд.Сотрудник Set end)

                // *** End programmer edit section *** (ТЧВхСотруд.Сотрудник Set end)
            }
        }
        
        /// <summary>
        /// мастеровая ссылка на шапку IIS.Probachetyre.ФормаРегВхода.
        /// </summary>
        // *** Start programmer edit section *** (ТЧВхСотруд.ФормаРегВхода CustomAttributes)

        // *** End programmer edit section *** (ТЧВхСотруд.ФормаРегВхода CustomAttributes)
        [Agregator()]
        [NotNull()]
        [PropertyStorage(new string[] {
                "ФормаРегВхода"})]
        public virtual IIS.Probachetyre.ФормаРегВхода ФормаРегВхода
        {
            get
            {
                // *** Start programmer edit section *** (ТЧВхСотруд.ФормаРегВхода Get start)

                // *** End programmer edit section *** (ТЧВхСотруд.ФормаРегВхода Get start)
                IIS.Probachetyre.ФормаРегВхода result = this.fФормаРегВхода;
                // *** Start programmer edit section *** (ТЧВхСотруд.ФормаРегВхода Get end)

                // *** End programmer edit section *** (ТЧВхСотруд.ФормаРегВхода Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ТЧВхСотруд.ФормаРегВхода Set start)

                // *** End programmer edit section *** (ТЧВхСотруд.ФормаРегВхода Set start)
                this.fФормаРегВхода = value;
                // *** Start programmer edit section *** (ТЧВхСотруд.ФормаРегВхода Set end)

                // *** End programmer edit section *** (ТЧВхСотруд.ФормаРегВхода Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ТЧВхСотрудE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ТЧВхСотрудE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ТЧВхСотрудE", typeof(IIS.Probachetyre.ТЧВхСотруд));
                }
            }
        }
    }
    
    /// <summary>
    /// Detail array of ТЧВхСотруд.
    /// </summary>
    // *** Start programmer edit section *** (DetailArrayDetailArrayOfТЧВхСотруд CustomAttributes)

    // *** End programmer edit section *** (DetailArrayDetailArrayOfТЧВхСотруд CustomAttributes)
    public class DetailArrayOfТЧВхСотруд : ICSSoft.STORMNET.DetailArray
    {
        
        // *** Start programmer edit section *** (IIS.Probachetyre.DetailArrayOfТЧВхСотруд members)

        // *** End programmer edit section *** (IIS.Probachetyre.DetailArrayOfТЧВхСотруд members)

        
        /// <summary>
        /// Construct detail array.
        /// </summary>
        /// <summary>
        /// Returns object with type ТЧВхСотруд by index.
        /// </summary>
        /// <summary>
        /// Adds object with type ТЧВхСотруд.
        /// </summary>
        public DetailArrayOfТЧВхСотруд(IIS.Probachetyre.ФормаРегВхода fФормаРегВхода) : 
                base(typeof(ТЧВхСотруд), ((ICSSoft.STORMNET.DataObject)(fФормаРегВхода)))
        {
        }
        
        public IIS.Probachetyre.ТЧВхСотруд this[int index]
        {
            get
            {
                return ((IIS.Probachetyre.ТЧВхСотруд)(this.ItemByIndex(index)));
            }
        }
        
        public virtual void Add(IIS.Probachetyre.ТЧВхСотруд dataobject)
        {
            this.AddObject(((ICSSoft.STORMNET.DataObject)(dataobject)));
        }
    }
}
